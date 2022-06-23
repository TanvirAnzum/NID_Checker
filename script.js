const form = document.querySelector(".main__form");
const modal = document.querySelector(".main__modal");
const x = document.querySelector(".close");
const img = document.querySelector(".main__modal__img");
const num = document.querySelector("#number");
const text = document.querySelector(".main__modal__verdict");
const clear = document.querySelector(".clear");

//for opening modal and displaying verdict
form.addEventListener("submit", (e) => {
  e.preventDefault();
  modal.style.opacity = "1";
  modal.style.pointerEvents = "all";
  let str = verdict(num.value.toString());
  if (str == null) update("wrong", "Not Valid", "Reason: Pattern Invalid.");
  else {
    let birth_year = str.substr(0, 4);
    if (isLeapYear(birth_year))
      update("wrong", "Not Valid", "Reason: Birth Year Was Leap Year.");
    else update("right", "Valid", `Your ID: ${str}.`);
  }
});

//for closing modal
x.addEventListener("click", () => {
  modal.style.opacity = "0";
  modal.style.pointerEvents = "none";
});

//pattern matching
function verdict(val) {
  let pattern = /(19[0-9][0-9]\d{13})/;
  let output = val.match(pattern);
  if (output == null) return output;

  output = val.match(pattern)[0];
  //this is for extracting single string from match function if pattern is not global

  return output;
}

//updating verdict to html elements
function update(src, txt, msg) {
  img.src = `./${src}.png`;
  text.innerHTML = `Your NID is ${txt}.<br>
  ${msg}`;
}

//checking leag year
function isLeapYear(year) {
  year = Number(year);
  if (year % 400 == 0) return true;
  else if (year % 100 == 0) return false;
  else if (year % 4 == 0) return true;
  else return false;
}

//clear input field

clear.addEventListener("click", () => {
  num.value = "";
  clear.style.visibility = "hidden";
});

num.addEventListener("input", () => {
  if (num.value != "") {
    clear.style.visibility = "visible";
  }
});
