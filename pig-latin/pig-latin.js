export const translator = {
  translate: function t(phrase) {
    return phrase.split(' ').map((word) => {
      let groups;
      if (/^(yt|xr).*$/.test(word)) {
        groups = ['', word];
      } else if (/^y[aeiou].*$/.test(word)) {
        groups = ['y', word.substr(1)];
      } else {
        groups = /^((?:s?qu|[^aeiouy]+)?)(.*)$/.exec(word).slice(1);
      }
      return `${groups[1]}${groups[0]}ay`;
    }).join(' ');
  },
};
