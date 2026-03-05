let word = "qqwwqq";
let wordLength = word.length - 1;
let checkingWord = "";
for(let i=wordLength;i>=0;i--){
  checkingWord += word[i];
}
console.log(checkingWord);
if(word===checkingWord){
 console.log(`The Give ${word} is Palindrome`);
 }