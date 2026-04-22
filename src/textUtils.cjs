function capitalise(text) {
  if (text == null) return "";
  const value = String(text);
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function wordCount(text) {
  if (text == null) return 0;
  const value = String(text).trim();
  if (value === "") return 0;
  return value.split(/\s+/).length;
}

function reverse(text) {
  if (text == null) return "";
  return String(text).split("").reverse().join("");
}

module.exports = {
  capitalise,
  wordCount,
  reverse
};
