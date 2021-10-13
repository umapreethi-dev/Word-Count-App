let wordcount = document.getElementById("word");
let longWord = document.getElementById("longestWord");
let charCount = document.getElementById("character");

function count() {
  var word = document.getElementById("textarea").value;
  wordCount(word);
}
function wordCount(word) {
  let wordSplit = word.split(" ");
  // counting words
  wordcount.innerHTML = wordSplit.length;

  // Longest Word
  let longestWordLength = 0;
  let longestWord;
  for (let j = 0; j < wordSplit.length; j++) {
    if (wordSplit[j].length > longestWordLength) {
      longestWordLength = wordSplit[j].length;
      longestWord = wordSplit[j];
    }
  }
  longWord.innerHTML = longestWord;
  // Character counting
  let char = word.replace(/ /g, "");
  charCount.innerHTML = char.length;
}

function restart() {
  wordcount.innerHTML = " ";
  longWord.innerHTML = " ";
  charCount.innerHTML = " ";
  document.getElementById("textarea").value = " ";
}
