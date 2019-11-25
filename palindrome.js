// Reverses a string
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Returns true for a palindrome, false otherwise
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

// Return an array of username and domain from an email
function emailParts(email) {
  let processedContent = email.toLowerCase();
  return processedContent.split("@");
}