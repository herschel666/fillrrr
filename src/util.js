const appendPlaceholderToWord = (placeholder) => (word) =>
  word.replace(/([^a-z0-9]*)$/i, `${placeholder}$1`);

export const normalizeText = (text = '') => text.trim().replace(/\s+/g, ' ');

export const fillWithPlaceholderLetters = (text, ratio, placeholder = 'x') => {
  const appendToWord = appendPlaceholderToWord(placeholder);
  const finalLength = Math.round(text.length * ratio) - text.length;
  const words = text.split(/\s+/);
  const size = words.length;
  const iterations = Array.from({ length: finalLength }, (_, i) => i).reduce(
    (acc, i) => {
      if (!i || !(i % size)) {
        return [...acc, [i]];
      }
      const lastItemIndex = acc.length - 1;
      const lastItem = acc[lastItemIndex];
      lastItem.push(i);
      return [...acc.slice(0, lastItemIndex), lastItem];
    },
    []
  );

  return iterations
    .reduce((finalWords, iteration) => {
      iteration.forEach((_, i) => {
        finalWords[i] = appendToWord(finalWords[i]);
      });
      return finalWords;
    }, words.slice())
    .join(' ');
};
