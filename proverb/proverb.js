function eachCons(arr, length) {
  return Array.from(Array(arr.length - length + 1))
    .map((_, i) => arr.slice(i, i + length));
}

const forWantOf = ([item, nextItem]) => `For want of a ${item} \
the ${nextItem} was lost.`;

const parade = items => eachCons(items, 2).map(forWantOf).join('\n');

export function proverb(...items) {
  let options = {};
  if (typeof items[items.length - 1] !== 'string') {
    options = items.pop();
  }
  return `${parade(items)}
And all for the want of a \
${[options.qualifier, items[0]].join(' ').trim()}.`;
}
