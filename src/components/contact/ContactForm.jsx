import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { contactInfo } from '../../data/social'

const initialValues = { name: '', email: '', subject: '', message: '' }
const fieldLimits = { name: 120, email: 254, subject: 160, message: 5000 }

const fields = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name', placeholder: 'Your name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', placeholder: 'you@example.com' },
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'What would you like to discuss?' },
  { name: 'message', label: 'Message', type: 'textarea', placeholder: 'A few details about your message...' },
]

const validateField = (field, value) => {
  const normalizedValue = value.trim()

  if (!normalizedValue) return 'This field is required.'
  if (normalizedValue.length > fieldLimits[field]) return `Use ${fieldLimits[field]} characters or fewer.`
  if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(normalizedValue)) {
    return 'Enter a valid email address.'
  }
  if (field === 'message' && normalizedValue.length < 10) {
    return 'Please include a little more detail (at least 10 characters).'
  }

  return ''
}

const inputClassName = (hasError) =>
  `mt-2 block w-full rounded-xl border px-3.5 py-3 text-sm text-slate-950 outline-none transition-all duration-200 placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-cyan-700 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 ${
    hasError
      ? 'border-rose-600 bg-rose-50 shadow-[0_0_0_4px_rgba(225,29,72,0.06)]'
      : 'border-slate-300 bg-white shadow-sm hover:border-slate-400 focus-visible:border-cyan-700'
  }`

function ContactField({ field, value, error, onChange }) {
  const { name, label, type, autoComplete, placeholder } = field
  const fieldId = `contact-${name}`
  const errorId = `${fieldId}-error`
  const sharedProps = {
    id: fieldId,
    name,
    required: true,
    maxLength: fieldLimits[name],
    value,
    onChange,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? errorId : undefined,
    placeholder,
    className: inputClassName(Boolean(error)),
  }

  return (
    <div className={name === 'message' ? 'sm:col-span-2' : ''}>
      {name === 'message' ? (
        <div className="flex items-baseline justify-between gap-3">
          <label htmlFor={fieldId} className="text-sm font-medium text-slate-800">
            {label} <span aria-hidden="true" className="text-rose-700">*</span>
          </label>
          <span className="text-xs text-slate-500">{value.length}/{fieldLimits[name]}</span>
        </div>
      ) : (
        <label htmlFor={fieldId} className="text-sm font-medium text-slate-800">
          {label} <span aria-hidden="true" className="text-rose-700">*</span>
        </label>
      )}

      {type === 'textarea' ? (
        <textarea {...sharedProps} rows={4} className={`${sharedProps.className} min-h-32 resize-y leading-6`} />
      ) : (
        <input {...sharedProps} type={type} autoComplete={autoComplete} />
      )}

      {error ? <p id={errorId} className="mt-1.5 text-xs font-medium text-rose-800">{error}</p> : null}
    </div>
  )
}

export default function ContactForm() {
  const formRef = useRef(null)
  const submissionLock = useRef(false)
  const reduceMotion = useReducedMotion()
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submission, setSubmission] = useState({ state: 'idle', message: '' })
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim()

  useEffect(() => {
    if (submission.state !== 'success') return undefined

    const timer = window.setTimeout(() => {
      setSubmission({ state: 'idle', message: '' })
    }, 5000)

    return () => window.clearTimeout(timer)
  }, [submission.state])

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))

    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: validateField(name, value) }))
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (submissionLock.current) return

    const nextErrors = Object.fromEntries(
      Object.entries(values).map(([field, value]) => [field, validateField(field, value)]),
    )
    setErrors(nextErrors)

    const firstInvalidField = Object.keys(nextErrors).find((field) => nextErrors[field])
    if (firstInvalidField) {
      setSubmission({ state: 'idle', message: '' })
      formRef.current?.elements.namedItem(firstInvalidField)?.focus()
      return
    }

    if (!endpoint) {
      setSubmission({
        state: 'error',
        message: 'The message service is not configured yet. Please email me directly instead.',
      })
      return
    }

    const formData = new FormData(formRef.current)
    Object.entries(values).forEach(([field, value]) => formData.set(field, value.trim()))
    formData.set('_subject', `Portfolio contact: ${values.subject.trim()}`)
    formData.set('_replyto', values.email.trim())

    const controller = new AbortController()
    const timeoutId = window.setTimeout(() => controller.abort(), 20000)
    submissionLock.current = true
    setSubmission({ state: 'sending', message: '' })

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
        signal: controller.signal,
      })

      if (!response.ok) throw new Error('Message delivery failed.')

      setValues(initialValues)
      setErrors({})
      formRef.current?.reset()
      setSubmission({
        state: 'success',
        message: 'Message sent successfully. Thank you for reaching out.',
      })
    } catch {
      setSubmission({
        state: 'error',
        message: 'Something went wrong while sending your message. Please try again or email me directly.',
      })
    } finally {
      window.clearTimeout(timeoutId)
      submissionLock.current = false
    }
  }

  return (
    <>
      <AnimatePresence>
        {submission.state === 'success' ? (
          <motion.div
            key="contact-success-toast"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -12, scale: 0.98 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0 : 0.25, ease: 'easeOut' }}
            role="status"
            aria-live="polite"
            className="pointer-events-none fixed right-4 top-4 z-50 w-[min(92vw,22rem)]"
          >
            <div className="flex items-start gap-3 rounded-2xl border border-emerald-400/40 bg-slate-900/95 px-4 py-3 text-left shadow-[0_18px_40px_rgba(16,185,129,0.18)] backdrop-blur-sm">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                <Check size={15} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Message sent successfully</p>
                <p className="mt-1 text-xs leading-5 text-slate-300">Thank you for reaching out.</p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <form ref={formRef} onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
        <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor="contact-company">Leave this field empty</label>
          <input id="contact-company" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {fields.map((field) => (
            <ContactField
              key={field.name}
              field={field}
              value={values[field.name]}
              error={errors[field.name]}
              onChange={handleChange}
            />
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={submission.state === 'sending'}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(15,23,42,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-950 active:translate-y-0 disabled:cursor-wait disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-800"
          >
            {submission.state === 'sending' ? 'Sending...' : 'Send message'}
            {submission.state === 'success' ? <Check size={16} aria-hidden="true" /> : <ArrowUpRight size={16} aria-hidden="true" />}
          </button>
          <p className="text-xs leading-5 text-slate-500">Your details are used only to respond to your message.</p>
        </div>

        <div
          aria-live="polite"
          aria-atomic="true"
          role={submission.state === 'error' ? 'alert' : undefined}
          className={`text-sm leading-6 ${submission.state === 'success' ? 'text-emerald-800' : submission.state === 'error' ? 'text-rose-800' : 'sr-only'}`}
        >
          {submission.message}
          {submission.state === 'error' ? (
            <a className="ml-1 font-semibold underline underline-offset-2" href={`mailto:${contactInfo.email}`}>
              {contactInfo.email}
            </a>
          ) : null}
        </div>
      </form>
    </>
  )
}