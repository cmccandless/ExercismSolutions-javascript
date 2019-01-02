/* eslint-disable no-param-reassign */
function transform(old) {
  return Object.keys(old).reduce((map, k) => {
    old[k].forEach((v) => {
      map[v.toLowerCase()] = parseInt(k, 10);
    });
    return map;
  }, {});
}

export default transform;
