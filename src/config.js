module.exports = {
  siteTitle: 'Sean Miller | Software Engineer',
  siteDescription:
    'Sean Miller is a software engineer based in Austin, TX who specializes in building high functionality applications and backends.',
  siteKeywords:
    'sean miller, c++, backend, java, python, software engineer, computer science',
  siteUrl: 'https://seanmiller.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Sean Miller',
  location: 'Austin, TX',
  email: 'sean@millerfamily.tech',
  github: 'https://github.com/tamuseanmiller',
  twitterHandle: '@beastosean',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/tamuseanmiller',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sean-miller-0a057b182/',
    },
    {
      name: 'PlayStore',
      url:
        'https://play.google.com/store/apps/dev?id=5481397734462305141&hl=en',
    },
    {
      name: 'Instagram',
      url:
        'https://www.instagram.com/be_defined',
    },
    {
      name: 'Twitter',
      url:
        'https://twitter.com/beastosean',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight:
    100,

  colors:
    {
      green: '#64ffda',
      navy:
        '#0a192f',
      darkNavy:
        '#020c1b',
    }
  ,

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: {x: 0, y: 0, z: 0},
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: {top: 0, right: 0, bottom: 0, left: 0},
  }),
}
;
