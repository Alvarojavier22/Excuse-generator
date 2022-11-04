/* eslint-disable */
import "./style.css";

window.onload = () => {
  //write your code here

  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console! ");
};

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let pronounIndex = Math.floor(Math.random() * who.length);
  let subjectIndex = Math.floor(Math.random() * action.length);
  let actionIndex = Math.floor(Math.random() * what.length);
  let possesionIndex = Math.floor(Math.random() * when.length);

  return (
    who[pronounIndex] +
    " " +
    action[subjectIndex] +
    " " +
    what[actionIndex] +
    " " +
    when[possesionIndex]
  );
};
