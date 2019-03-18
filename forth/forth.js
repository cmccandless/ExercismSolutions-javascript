const isInteger = x => /^-?\d+$/.test(x);
const operators = {
  '+': (a, b) => b + a,
  '-': (a, b) => b - a,
  '*': (a, b) => b * a,
  '/': function div(a, b) {
    if (a === 0) throw Error('Division by zero');
    return Math.floor(b / a);
  },
};

export class Forth {
  constructor() {
    this.userDefined = {};
    this.stack = [];
  }

  pop() {
    if (this.stack.length < 1) throw Error('Stack empty');
    return this.stack.pop();
  }

  evaluateUserDefined(tokens) {
    tokens.pop();
    tokens.shift();
    const key = tokens.shift();
    if (isInteger(key)) {
      throw Error('Invalid definition');
    }
    this.userDefined[key] = tokens;
  }

  evaluate(inputLine) {
    const tokens = inputLine.toLowerCase().split(' ');
    if (inputLine.startsWith(':')) {
      return this.evaluateUserDefined(tokens);
    }
    while (tokens.length > 0) {
      let x; let
        y;
      const token = tokens.shift();
      if (isInteger(token)) {
        this.stack.push(parseInt(token, 10));
      } else if (this.userDefined[token] !== undefined) {
        this.userDefined[token].forEach(t => tokens.push(t));
      } else if (/^[+*/-]$/.test(token)) {
        this.stack.push(operators[token](this.pop(), this.pop()));
      } else {
        switch (token) {
          case 'dup':
            this.stack.push(...Array(2).fill(this.pop()));
            break;
          case 'drop':
            this.pop();
            break;
          case 'swap':
            this.stack.push(this.pop(), this.pop());
            break;
          case 'over':
            x = this.pop();
            y = this.pop();
            this.stack.push(y, x, y);
            break;
          default:
            throw Error('Unknown command');
        }
      }
    }
    return 0;
  }
}
