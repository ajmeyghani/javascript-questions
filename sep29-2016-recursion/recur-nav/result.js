module.exports = {
  name: 'Home',
  url: '/',
  childNavs: [
    {
      name: 'About Us',
      url: '/about-us',
      childNavs: [
        {
          name: 'Our Company',
          url: '/about-us/our-company',
          childNavs: []
        }
      ]
    },
    {
      name: 'Contact Us',
      url: '/contact-us',
      childNavs: []
    },
    {
      name: 'Work',
      url: '/work',
      childNavs: [
        {
          name: 'Marketing',
          url: '/work/marketing',
          childNavs: []
        },
        {
          name: 'Identity',
          url: '/work/identity',
          childNavs: []
        }
      ]
    }
  ]
};


