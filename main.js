let Phrase = require("juandpineiro-palindrome");

function palindromeTester(event) {
  event.preventDefault();
  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");
  let content = `<strong>${phrase.content}</strong>`

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"${content}" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"${content}" is not a palindrome.`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit", function(event) {
    palindromeTester(event);
  });
});
