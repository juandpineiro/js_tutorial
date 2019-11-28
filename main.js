let Phrase = require("juandpineiro-palindrome");

function palindromeTester() {
  let string = prompt("Please enter a string for palindrome testing:");
  let phrase = new Phrase(string);
  let palindromeResult = document.querySelector("#palindromeResult");
  let content = `<strong>${phrase.content}</strong>`

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"${content}" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"${content}" is not a palindrome.`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector("#palindromeTester");
  button.addEventListener("click", function() {
    palindromeTester();
  });
});
