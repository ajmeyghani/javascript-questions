var navigation = {
  name: 'Home',
  url: '/',
  childNodes: [
    {
      name: 'About us',
      url: '/about-us',
      childNodes: [
        {
          name: 'Our Company',
          url: 'about-us/company',
          childNodes: []
        }
      ]
    },
    {
      name: 'Contact Us',
      url: '/contact',
      childNodes: []
    },
    {
      name: 'Work',
      url: '/work',
      childNodes: [
        {
          name: 'Marketing',
          url: '/work/marketing',
          childNodes: []
        },
        {
          name: 'Identity',
          url: '/work/identity',
          childNodes: []
        }
      ]
    }
  ]
};
