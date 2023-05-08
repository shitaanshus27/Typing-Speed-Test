const setOWords = [
  "My name is Shitaanshu singh",
  "I am a full stack developer",
  "I am the one who create website.",
];
const msg = document.getElementById("msg");
const typeWords = document.getElementById("mywords");
const btn = document.getElementById("btn");
const startingTime = document.getElementById("startTimer");
const endingTime = document.getElementById("endTimer");
let startTime, endTime;
const playGame = () => {
  let randomNumber = Math.floor(Math.random() * setOWords.length);
  msg.innerText = setOWords[randomNumber];
  let date = new Date();
  startTime = date.getTime();
  console.log(date.getMinutes());
  btn.innerText = "Done";
};
const endGame = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = Math.round((endTime - startTime) / 1000);
  console.log(totalTime);
  let totalStr = typeWords.value;
  console.log(typeWords.value);
  let wordCount = wordCounter(totalStr);
  let speed = Math.round((wordCount / totalTime) * 60);
  let finalMsg = "You Typed total at" + " " + speed + " " + "words per minutes";

  finalMsg += compareWords(msg.innerText, totalStr);
  msg.innerText = finalMsg;
};
const compareWords = (str1, str2) => {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let cnt = 0;
  words1.forEach(function (item, index) {
    if (item == words2[index]) {
      cnt++;
    }
  });
  let errorWords = words1.length - cnt;
  return (
    " " +
    cnt +
    " " +
    "Correct out of " +
    " " +
    words1.length +
    " " +
    "words and the total number of error are" +
    " " +
    errorWords +
    "."
  );
};
const wordCounter = (str) => {
  let response = str.split(" ").length;
  return response;
};
btn.addEventListener("click", function () {
  console.log(this);
  if (this.innerText == "Start") {
    typeWords.disabled = false;
    playGame();
  } else if (this.innerText == "Done") {
    typeWords.disabled = true;
    btn.innerText = "Start";
    endGame();
  }
});
