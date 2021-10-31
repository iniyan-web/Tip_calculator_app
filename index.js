const billAmount = $(".bill-amt-input");
const numPeople = $(".num-people-input");
const tipBtn1 = $("#btn1");
const tipBtn2 = $("#btn2");
const tipBtn3 = $("#btn3");
const tipBtn4 = $("#btn4");
const tipBtn5 = $("#btn5");
const customTip = $(".custom-tip");
const resetBtn = $(".reset-btn");

var bill = 0;
var people = 0;
var tip = 0;

let calculate = () => {
  if ((bill != 0) && (people != 0) && (tip != 0)) {
    let tipPerperson = (bill * (tip / 100)) / people;
    let totalPerPerson = (bill / people) + tipPerperson;
    $(".total-tip > span").text(tipPerperson.toFixed(2));
    $(".total-amt > span").text(totalPerPerson.toFixed(2));
  }
};

let makeZero = () => {
  $(".total-tip > span").text("0.00");
  $(".total-amt > span").text("0.00");
};

let getVal = (tipBtn) => {
  tip = tipBtn.val();
  customTip.val("");
  $(".btn").removeClass("tip-click");
  tipBtn.addClass("tip-click");
  calculate();
};

billAmount.on("input", () => {
  bill = billAmount.val();
  if ((bill < 0) || (bill === "")) {
    makeZero();
  }
  calculate();
});

customTip.on("input", () => {
  tip = customTip.val();
  if ((tip < 0) || (tip === "")) {
    makeZero();
  }
  $(".btn").removeClass("tip-click");
  calculate();
});

numPeople.on("input", () => {
  people = numPeople.val();
  if (people != 0) {
    $(".people-error").css("display", "none");
    numPeople.removeClass("wrong-value");
  } else {
    $(".people-error").css("display", "block");
    numPeople.addClass("wrong-value");
    makeZero();
  }
  calculate();
});

tipBtn1.click(() => getVal(tipBtn1));
tipBtn2.click(() => getVal(tipBtn2));
tipBtn3.click(() => getVal(tipBtn3));
tipBtn4.click(() => getVal(tipBtn4));
tipBtn5.click(() => getVal(tipBtn5));
resetBtn.click(() => location.reload());
