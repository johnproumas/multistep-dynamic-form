// JavaScript
var questionTree = {
  step1: {
    yes: "step2",
    no: "result",
  },
  step2: {
    spray: "step3",
    lotion: "result",
    random: "result",
  },
  step3: {
    day: "result",
    night: "result",
  },
  // More steps...
};

var recommendations = {
  step1: {
    yes: "Sensitive Skin Sunscreen",
    no: "Regular Sunscreen",
  },
  step2: {
    spray: "Spray Sunscreen",
    lotion: "Lotion Sunscreen",
    random: "Random Third Option Sunscreen",
  },
  step3: {
    day: "Sunscreen for Day",
    night: "Lotion for Night",
  },
  // More steps...
};

function nextStep(currentStep, answer) {
  console.log(currentStep, answer);
  var nextStep = questionTree[currentStep][answer];
  document.getElementById(currentStep).style.display = "none";
  document.getElementById(nextStep).style.display = "block";
  if (nextStep === "result") {
    document.getElementById("recommendation").textContent =
      recommendations[currentStep][answer];
  }
}
