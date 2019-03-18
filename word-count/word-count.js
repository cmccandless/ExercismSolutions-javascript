/* eslint-disable no-param-reassign */
export class Words {
  count(text) {
    return text.split(/[ \n\t]/)
      .map(word => word.toLowerCase())
      .filter(word => word !== '')
      .reduce(
        (map, word) => {
          map[word] = (map[word] || 0) + 1;
          return map;
        },
        Object.create(null),
      );
  }
}
