/*
  Given the following structure, recursively go
  throgh the structure and generate the navs.
*/
var resp = {
  links: [
    {
      name: 'works',
      link: '/works',
      links: [
        {
          name: 'w1',
          link: '/works/w1',
          links: []
        },
        {
          name: 'w2',
          link: '/works/w2',
          links: []
        }
      ]
    },
    {
      name: 'about',
      link: '/about'
      links: []
    }
  ]
};
