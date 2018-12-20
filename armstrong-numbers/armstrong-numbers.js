export const validate = input => input === (function f(s) {
  return s.split('').reduce(
    (a, d) => a + (parseInt(d, 10) ** s.length),
    0,
  );
}(input.toString()));
