export function encode(str) {
  let encoded = '';
  let last = null;
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    const ch = str.charAt(i);
    if (last === ch) {
      count += 1;
    } else {
      if (last != null) {
        if (count > 1) {
          encoded += count.toString();
        }
        encoded += last;
      }
      last = ch;
      count = 1;
    }
  }
  if (last != null) {
    if (count > 1) {
      encoded += count.toString();
    }
    encoded += last;
  }
  return encoded;
}

export function decode(str) {
  let decoded = '';
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    const ch = str.charAt(i);
    const digit = parseInt(ch, 10);
    if (isNaN(digit)) {
      if (count < 1) count = 1;
      for (let j = 0; j < count; j += 1) {
        decoded += ch;
      }
      count = 0;
    } else if (count < 0) count = digit;
    else count = count * 10 + digit;
  }
  return decoded;
}
