export interface SiteNavLink {
  name: string;
  url: string;
}

export const navIcons: SiteNavLink[] = [
  {
    name: 'Resume',
    url: '/resume.pdf',
  },
  {
    name: 'Email',
    url: 'mailto: drew.grubb0@gmail.com',
  },
  {
    name: 'Github',
    url: 'https://github.com/drewgrubb0',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/drew-grubb/',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/drew.grubb/',
  },
];

export const navLinks: SiteNavLink[] = [
  {
    name: 'About',
    url: '/#about',
  },
  {
    name: 'Work',
    url: '/#work',
  },
  {
    name: 'Skills',
    url: '/#skills',
  },
  {
    name: 'Contact',
    url: '/#contact',
  },
];
