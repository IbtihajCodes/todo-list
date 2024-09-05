"use strict";

const mainBtn = document.getElementById("main-btn");
const inputValue = document.getElementById("input");
mainBtn.addEventListener("click", function () {
  const task = inputValue.value;
  console.log(task);
  if (task === "") {
    alert("Please Enter Something Before Adding.");
    return 0;
  }
  inputValue.value = "";
  document.createElement;
});
