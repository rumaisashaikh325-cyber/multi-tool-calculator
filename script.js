function showTool(id) {
  document.querySelectorAll(".tool").forEach(tool => {
    tool.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}

/* NORMAL CALCULATOR */
function insert(val) {
  result.value += val;
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch {
    result.value = "Error";
  }
}

function clr() {
  result.value = "";
}

function del() {
  result.value = result.value.slice(0, -1);
}

/* BMI */
function bmiCalc() {
  let w = weight.value;
  let h = height.value / 100;
  let bmi = (w / (h * h)).toFixed(2);
  bmiResult.innerText = "BMI: " + bmi;
}

/* AGE */
function ageCalc() {
  let dobDate = new Date(dob.value);
  let diff = Date.now() - dobDate.getTime();
  let age = new Date(diff).getUTCFullYear() - 1970;
  ageResult.innerText = "Age: " + age + " years";
}

/* PERCENTAGE */
function percentCalc() {
  let p = (obtained.value / total.value) * 100;
  percentResult.innerText = "Percentage: " + p.toFixed(2) + "%";
}

/* EMI */
function emiCalc() {
  let P = loan.value;
  let R = rate.value / 12 / 100;
  let N = time.value * 12;

  let emi =
    (P * R * Math.pow(1 + R, N)) /
    (Math.pow(1 + R, N) - 1);

  emiResult.innerText = "Monthly EMI: ₹" + emi.toFixed(2);
}

/* GST */
function gstCalc() {
  let a = Number(amount.value);
  let g = Number(gstRate.value);
  let gst = (a * g) / 100;
  gstResult.innerText =
    "GST: ₹" + gst + " | Total: ₹" + (a + gst);
}

/* UNIT */
function unitCalc() {
  unitResult.innerText =
    "Meters: " + (cm.value / 100);
}
