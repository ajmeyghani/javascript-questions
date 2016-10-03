var resp = require('./response.json');
function makeNav(nav) {
  if (!nav.child_navs) {
    return [];
  }
  return {
    name: nav.display_name,
    url: nav.url,
    childNavs: nav.child_navs.map(nav => makeNav(nav))
  };
}

module.exports = makeNav;
