/**
 * Capitalises the first letter of a string
 */
function capitalise(text) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Counts the number of words in a string
 */
function wordCount(text) {
  if (!text) return 0;
  return text.trim().split(/\s+/).length;
}

/**
 * Reverses a string
 */
function reverse(text) {
  return text.split("").reverse().join("");
}

module.exports = {
  capitalise,
  wordCount,
  reverse
};