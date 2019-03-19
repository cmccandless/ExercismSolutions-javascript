const ASKING = 1;
const YELLING = 2;
const YELLING_AND_ASKING = YELLING | ASKING;

const isAsking = message => (message.endsWith('?') ? ASKING : 0);
const isYelling = message => (
  (/[A-Z]/.test(message) && message === message.toUpperCase())
    ? YELLING
    : 0);

const messages = {
  silence: 'Fine. Be that way!',
  0: 'Whatever.',
  [YELLING_AND_ASKING]: "Calm down, I know what I'm doing!",
  [YELLING]: 'Whoa, chill out!',
  [ASKING]: 'Sure.',
};

export function hey(message) {
  const cleaned = message.trim();
  return cleaned === ''
    ? messages.silence
    : messages[isYelling(cleaned) | isAsking(cleaned)];
}
