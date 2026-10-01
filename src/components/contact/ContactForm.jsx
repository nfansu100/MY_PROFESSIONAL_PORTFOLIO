import { useRef, useState } from 'react'
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
  `mt-2 block w-full rounded-md border px-3.5 py-3 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-cyan-700 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 ${
    hasError
      ? 'border-rose-600 bg-rose-50'
      : 'border-slate-300 bg-white hover:border-slate-400 focus-visible:border-cyan-700'
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
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submission, setSubmission] = useState({ state: 'idle', message: '' })
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim()

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
        message: 'Your message has been sent successfully. Thank you for reaching out.',
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
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-cyan-950 active:translate-y-0 disabled:cursor-wait disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-800"
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
  )
}