$(".right-block, .left-block").sortable({
  connectWith: ".left-block, .right-block",
});
/* масив із позиціонуванням картинки для елементів */
let pos = [
  "top left",
  "top 0 left -135px",
  "top 0 left -270px",
  "left -405px top 0",
  "left -540px top 0",
  "left 0 top -200px",
  "left -135px top -200px",
  "left -270px top -200px",
  "left -405px top -200px",
  "left -540px top -200px",
  "left 0 top -400px",
  "left -135px top -400px",
  "left -270px top -400px",
  "left -405px top -400px",
  "left -540px top -400px",
];
/* Перевірка правильності складення пазлів */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let check = true;
function shuffle(arr) {
  var j, temp;
  for (var i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
/* довга ковбаса доступу до елементів за задання їм картинки відповідно до масиву  позиціонування */
let q1 = document.getElementById(`q1`);
let q2 = document.getElementById(`q2`);
let q3 = document.getElementById(`q3`);
let q4 = document.getElementById(`q4`);
let q5 = document.getElementById(`q5`);
let q6 = document.getElementById(`q6`);
let q7 = document.getElementById(`q7`);
let q8 = document.getElementById(`q8`);
let q9 = document.getElementById(`q9`);
let q10 = document.getElementById(`q10`);
let q11 = document.getElementById(`q11`);
let q12 = document.getElementById(`q12`);
let q13 = document.getElementById(`q13`);
let q14 = document.getElementById(`q14`);
let q15 = document.getElementById(`q15`);
q1.style.backgroundPosition = `${pos[0]}`;
q2.style.backgroundPosition = `${pos[1]}`;
q3.style.backgroundPosition = `${pos[2]}`;
q4.style.backgroundPosition = `${pos[3]}`;
q5.style.backgroundPosition = `${pos[4]}`;
q6.style.backgroundPosition = `${pos[5]}`;
q7.style.backgroundPosition = `${pos[6]}`;
q8.style.backgroundPosition = `${pos[7]}`;
q9.style.backgroundPosition = `${pos[8]}`;
q10.style.backgroundPosition = `${pos[9]}`;
q11.style.backgroundPosition = `${pos[10]}`;
q12.style.backgroundPosition = `${pos[11]}`;
q13.style.backgroundPosition = `${pos[12]}`;
q14.style.backgroundPosition = `${pos[13]}`;
q15.style.backgroundPosition = `${pos[14]}`;

let allElements = [
  q1,
  q2,
  q3,
  q4,
  q5,
  q6,
  q7,
  q8,
  q9,
  q10,
  q11,
  q12,
  q13,
  q14,
  q15,
];

/* ЗАписування елементів у ДОМ у відсортованому порядку */

/* Сортування масиву елементів */
$("#check").on("click", function () {
  for (let i = 0; i < $(".number").length; i++) {
    if ($(".number").eq(i).text() != numbers[i]) {
      check = false;
      break;
    }
  }
  if (check) {
    alert("Woohoo, well done, you did it!");
    x = 59;
    clearTimeout(timer);
  } else {
    alert("It's a pity, but you lost");
    $("#myBtn").attr("disabled", true);
    x = 59;
    clearTimeout(timer);
  }
  check = true;
});

$("#newGame").on("click", function () {
  for (let i = 0; i < $(".number").length; i++) {}
});
let timer;
let x = 59;
function countdown() {
  document.getElementById("rocket").innerHTML = `00:${x}`;
  document.getElementById("times").innerHTML = `00:${x}`;
  x--;
  if (x < 0) {
    clearTimeout(timer);
    alert("Its a pity, but you lost");
    $("#myBtn").attr("disabled", true);
  } else {
    timer = setTimeout(countdown, 1000);
  }
}
$("#newGame").on("click", function () {
  shuffle(allElements);
  $(".left-block").append(allElements);
  console.log(allElements);
  $("#startGame").attr("disabled", false);
  $("#myBtn").attr("disabled", true);
  x = 59;
  clearTimeout(timer);
});

$("#startGame").on("click", function () {
  shuffle(allElements);
  $(".left-block").append(allElements);
  console.log(allElements);
  $("#startGame").attr("disabled", true);
  $("#myBtn").attr("disabled", false);
  $("#newGame").attr("disabled", false);
  countdown();
});

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
}; 
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
