var resp = require('./response.json');
console.log(resp);
var nav = {};
function makeNav(apiResp) {
  if (!apiResp.child_navs) {
    return [];
  }
  return {
    name: apiResp.display_name,
    childNavs: makeNav(apiResp.child_navs)
  };
}

var result = makeNav(resp);
console.log(JSON.stringify(result, null, 2));
