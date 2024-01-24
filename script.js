var questionTree = {
  q1: {
    q1_emena: "q2",
    q1_oikogeneia: "q3",
    q1_paidia: "q4",
  },
  q2: {
    q2_prosopo: "q5",
    q2_soma: "q6",
    q2_kaitadio: "", // Check for special condition
  },
  q3: {
    q3_spf30: "result",
    q3_spf50: "result",
  },
  q4: {
    q4_galaktoma: "q9",
    q4_spray: "result",
    q4_rollon: "result",
  },
  q5: {
    q5_panades: "result",
    q5_mat: "q7",
    q5_xroma: "result",
    q5_epidermida: "result",
  },
  q6: {
    q6_spf20: "q10",
    q6_spf30: "q11",
    q6_spf50: "q12",
    q6_50plus: "result",
  },
  q7: {
    q7_spf30: "result",
    q7_spf50: "result",
  },
  q8: {
    q8_spf30: "result",
    q8_spf50: "q9",
    q8_50plus: "result",
  },
  q9: {
    q9_nai: "result",
    q9_oxi: "result",
  },
  q10: {
    q10_nai: "result",
    q10_oxi: "result",
  },
  q11: {
    q11_galaktoma: "result",
    q11_ladi: "result",
    q11_mist: "result",
  },
  q12: {
    q12_galaktoma: "result",
    q12_mist: "result",
  },
};

var recommendations = {
  q1: {
    q1_emena: "",
    q1_oikogeneia: "",
    q1_paidia: "",
  },
  q2: {
    q2_prosopo: "",
    q2_soma: "",
    q2_kaitadio: "", // Check for special condition
  },
  q3: {
    q3_spf30: "Milk Trigger Family SPF30",
    q3_spf50: "Milk Trigger Family SPF50",
  },
  q4: {
    q4_galaktoma: "",
    q4_spray: "Easy Spray Wet Skin SPF50",
    q4_rollon: "Rollon SPF50+",
  },
  q5: {
    q5_panades: "Face Cream Antispot SPF50",
    q5_mat: "",
    q5_xroma: "Face Cream CC SPF50",
    q5_epidermida: "Face Cream Sensitive SPF50+",
  },
  q6: {
    q6_spf20: "",
    q6_spf30: "",
    q6_spf50: "",
    q6_50plus: "Milk Spray Sensitive SPF50+",
  },
  q7: {
    q7_spf30: "Face Cream Super Mat SPF30",
    q7_spf50: "Face Cream Super Mat SPF50",
  },
  q8: {
    q8_spf30: "Milk Trigger Kids SPF30",
    q8_spf50: "",
    q8_50plus: "Milk Trigger Kids SPF 50+",
  },
  q9: {
    q9_nai: "Milk Trigger Kids SPF 50+",
    q9_oxi: "Milk Trigger Kids SPF50",
  },
  q10: {
    q10_nai: "Coconut Dreams Dry Oil SPF20",
    q10_oxi: "Oil Spray SPF20",
  },
  q11: {
    q11_galaktoma: "Milk Spray SPF30",
    q11_ladi: "Oil Spray SPF30",
    q11_mist: "Coconut Dreams Dry Mist SPF30",
  },
  q12: {
    q12_galaktoma: "Milk SPF50",
    q12_mist: "Coconut Dreams Dry Mist SPF50",
  },
};

// function nextStep(currentStep, answer) {
//   console.log(currentStep, answer);
//   console.log(answer);
//   var nextStep = questionTree[currentStep][answer];
//   if (answer === "q2_kaitadio") {
//     document.getElementById(currentStep).style.display = "none";
//     document.getElementById("q5").style.display = "block";
//     document.getElementById("q6").style.display = "block";
//   }
//   document.getElementById(currentStep).style.display = "none";
//   document.getElementById(nextStep).style.display = "block";
//   if (nextStep === "result") {
//     document.getElementById("recommendation").textContent =
//       recommendations[currentStep][answer];
//   }
// }

var nextSteps = [];
var storedResults = [];
var showResult = false;

function nextStep(currentStep, answer) {
  // If there are no more steps in the queue, generate the next steps based on the answer
  if (nextSteps.length === 0) {
    if (answer === "q2_kaitadio") {
      nextSteps.push("q5", "q6");
      showResult = true;
    } else {
      nextSteps.push(questionTree[currentStep][answer]);
    }
  }

  console.log(nextSteps);

  var nextStepId = nextSteps.shift();
  document.getElementById(currentStep).style.display = "none";
  document.getElementById(nextStepId).style.display = "block";

  // Check if the next step is a result after defining the nextStepId variable
  showResult = showResult || nextStepId.startsWith("result");
  console.log(showResult);

  // If the next step is a result or showResult is true, show the recommendation
  if (showResult) {
    document.getElementById("recommendation").innerHTML +=
      recommendations[currentStep][answer] + "<br>";
    showResult = false;
  }

  // If there are more steps, proceed to the next step
  if (nextSteps.length > 0) {
    nextStep(nextSteps[0], answer);
  }

  // If the next step is a result, show the recommendation and clear the next steps
  // if (nextStep.startsWith("result")) {
  //   document.getElementById("recommendation").textContent +=
  //     recommendations[currentStep][answer] + " ";
  //   nextSteps = [];
  // }
}

// function nextStep(currentStep, answer) {
//   // If there are no more steps in the queue, generate the next steps based on the answer
//   if (nextSteps.length === 0) {
//     if (answer === "q2_kaitadio") {
//       nextSteps.push("q5", "q6");
//       showResult = true;
//     } else {
//       nextSteps.push(questionTree[currentStep][answer]);
//     }
//   }

//   var nextStepId = nextSteps.shift();
//   document.getElementById(currentStep).style.display = "none";
//   document.getElementById(nextStepId).style.display = "block";

//   // Check if the next step is a result after defining the nextStepId variable
//   showResult = showResult || nextStepId.startsWith("result");

//   // If showResult is true, store the recommendation
//   if (showResult) {
//     storedResults.push(recommendations[currentStep][answer]);
//     showResult = false;
//   }

//   console.log(storedResults);

//   // If there are no more steps, show all the stored results and clear the results
//   if (nextSteps.length === 0) {
//     document.getElementById("recommendation").textContent =
//       storedResults.join("\n");
//     storedResults = [];
//   }
// }
