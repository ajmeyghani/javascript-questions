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

var result = makeNav(resp.data);
console.log(JSON.stringify(result, null, 2));
