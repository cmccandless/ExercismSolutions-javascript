const openers = new Map([['{', '}'], ['[', ']'], ['(', ')']]);
const closers = ['}', ']', ')'];

const reducer = (pending, ch, _, stack) => {
  if (openers.has(ch)) {
    pending.push(openers.get(ch));
  } else if (closers.includes(ch)) {
    if (!pending.length || pending.pop() !== ch) {
      // eslint-disable-next-line no-param-reassign
      stack.length = 0;
      return ['?'];
    }
  }
  return pending;
};

export const bracketPush = input => !input.split('')
  .reduce(reducer, []).length;
