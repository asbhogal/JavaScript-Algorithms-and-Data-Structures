/* Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

The input is a string with spaces and title-cased words

The output is a string with the spaces between words replaced by a hyphen (-)

The output should be all lower-cased letters

The output should not have any spaces */

function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/).join("-");
}
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");

console.log(urlSlug(" Winter Is  Coming")); // outputs winter-is-coming

// The Regex splits the string into an array of substrings based on one or more consecutive whitespace characters, using /\s+/ as the delimiter. The trim() before it removes additional whitespaces at the beginning and end of the string. The join() method puts together the substrings of the array and creates a new string containing the substrings connected with the delimiter -.
