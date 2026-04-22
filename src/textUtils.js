/**
 * Capitalises the first letter of a string
 */
function capitalise(text) {
  if (text == null) return "";
  const value = String(text);
  return value.charAt(0).toUpperCase() + value.slice(1);
}

/**
 * Counts the number of words in a string
 */
function wordCount(text) {
  if (text == null) return 0;
  const value = String(text).trim();
  if (value === "") return 0;
  return value.split(/\s+/).length;
}

/**
 * Reverses a string
 */
function reverse(text) {
  if (text == null) return "";
  return String(text).split("").reverse().join("");
}

module.exports = {
  capitalise,
  wordCount,
  reverse
};
