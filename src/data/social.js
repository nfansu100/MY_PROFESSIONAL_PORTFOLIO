import { areasOfInterest } from './about'

const email = 'nfansubarrow300@gmail.com'

export const contactInfo = {
  email,
  phone: '+212 697 999 438',
  location: 'Fès, Morocco',
  availability: 'Open to remote and on-site opportunities',
  interests: areasOfInterest,
}

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/nfansu100',
    type: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nfansu-o-barrow-326397304/',
    type: 'linkedin',
  },
  {
    label: 'Email',
    href: `mailto:${email}`,
    type: 'email',
  },
]
