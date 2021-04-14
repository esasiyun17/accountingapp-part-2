let typeSwitch = document.getElementById("btnType");
let btnAdd = document.getElementById("btnAdd");
let tableBodyIncome = document.getElementById("tableBodyIncome");
let tableBodyExpenses = document.getElementById("tableBodyExpenses");
let name = document.getElementById("input-model1");
let jan = document.getElementById("input-model2");
let fab = document.getElementById("input-model3");
let mar = document.getElementById("input-model4");
let apr = document.getElementById("input-model5");
let may = document.getElementById("input-model6");
let jun = document.getElementById("input-model7");
let july = document.getElementById("input-model8");
let aug = document.getElementById("input-model9");
let sep = document.getElementById("input-model10");
let oct = document.getElementById("input-model11");
let nov = document.getElementById("input-model12");
let dec = document.getElementById("input-model13");
let tableExpenses = document.getElementById("tableExpenses");
let tableIncome = document.getElementById("tableIncome");

let incomeJan = document.getElementById("incomeJan");
let incomeFab = document.getElementById("incomeFab");
let incomeMar = document.getElementById("incomeMar");
let incomeApr = document.getElementById("incomeApr");
let incomeMay = document.getElementById("incomeMay");
let incomeJun = document.getElementById("incomeJun");
let incomeJuly = document.getElementById("incomeJuly");
let incomeAug = document.getElementById("incomeAug");
let incomeSep = document.getElementById("incomeSep");
let incomeOct = document.getElementById("incomeOct");
let incomeNov = document.getElementById("incomeNov");
let incomeDec = document.getElementById("incomeDec");
let incomeSum = document.getElementById("incomeSum");

let expensesJan = document.getElementById("expensesJan");
let expensesFab = document.getElementById("expensesFab");
let expensesMar = document.getElementById("expensesMar");
let expensesApr = document.getElementById("expensesApr");
let expensesMay = document.getElementById("expensesMay");
let expensesJun = document.getElementById("expensesJun");
let expensesJuly = document.getElementById("expensesJuly");
let expensesAug = document.getElementById("expensesAug");
let expensesSep = document.getElementById("expensesSep");
let expensesOct = document.getElementById("expensesOct");
let expensesNov = document.getElementById("expensesNov");
let expensesDec = document.getElementById("expensesDec");
let expensesSum = document.getElementById("expensesSum");

btnAdd.addEventListener("click", (e) => {
  if (typeSwitch.textContent.trim() == "Income") {
    let incomeId = Math.floor(Math.random() * 100000);
    tableBodyIncome.innerHTML += `
            <tr id='${incomeId}'>
            <td scope="row"><i id='${incomeId}' class="far fa-minus-square delete"></i></td>
            <td scope="row">${name.value}</td>
            <td scope="row">${jan.value}</td>
            <td scope="row">${fab.value}</td>
            <td scope="row">${mar.value}</td>
            <td scope="row">${apr.value}</td>
            <td scope="row">${may.value}</td>
            <td scope="row">${jun.value}</td>
            <td scope="row">${july.value}</td>
            <td scope="row">${aug.value}</td>
            <td scope="row">${sep.value}</td>
            <td scope="row">${oct.value}</td>
            <td scope="row">${nov.value}</td>
            <td scope="row">${dec.value}</td>
            <td scope="row">${
              parseFloat(jan.value) +
              parseFloat(fab.value) +
              parseFloat(mar.value) +
              parseFloat(apr.value) +
              parseFloat(may.value) +
              parseFloat(jun.value) +
              parseFloat(july.value) +
              parseFloat(aug.value) +
              parseFloat(sep.value) +
              parseFloat(oct.value) +
              parseFloat(nov.value) +
              parseFloat(dec.value)
            }</td>
        </tr>
            `;

    saveIncomeStorage({
      id: incomeId,
      name: name.value,
      jan: jan.value,
      fab: fab.value,
      mar: mar.value,
      apr: apr.value,
      may: may.value,
      jun: jun.value,
      july: july.value,
      aug: aug.value,
      sep: sep.value,
      oct: oct.value,
      nov: nov.value,
      dec: dec.value,
      sum:
        parseFloat(jan.value) +
        parseFloat(fab.value) +
        parseFloat(mar.value) +
        parseFloat(apr.value) +
        parseFloat(may.value) +
        parseFloat(jun.value) +
        parseFloat(july.value) +
        parseFloat(aug.value) +
        parseFloat(sep.value) +
        parseFloat(oct.value) +
        parseFloat(nov.value) +
        parseFloat(dec.value),
    });
  } else if (typeSwitch.textContent.trim() == "Expenses") {
    let expensesId = Math.floor(Math.random() * 100000);
    tableBodyExpenses.innerHTML += `
        <tr id='${expensesId}'>
        <td scope="row"><i id='${expensesId}' class="far fa-minus-square delete"></i></td>
        <td scope="row">${name.value}</td>
        <td scope="row">${jan.value}</td>
        <td scope="row">${fab.value}</td>
        <td scope="row">${mar.value}</td>
        <td scope="row">${apr.value}</td>
        <td scope="row">${may.value}</td>
        <td scope="row">${jun.value}</td>
        <td scope="row">${july.value}</td>
        <td scope="row">${aug.value}</td>
        <td scope="row">${sep.value}</td>
        <td scope="row">${oct.value}</td>
        <td scope="row">${nov.value}</td>
        <td scope="row">${dec.value}</td>
        <td scope="row">${
          parseFloat(jan.value) +
          parseFloat(fab.value) +
          parseFloat(mar.value) +
          parseFloat(apr.value) +
          parseFloat(may.value) +
          parseFloat(jun.value) +
          parseFloat(july.value) +
          parseFloat(aug.value) +
          parseFloat(sep.value) +
          parseFloat(oct.value) +
          parseFloat(nov.value) +
          parseFloat(dec.value)
        }</td>
    </tr>
        `;

    saveExpensesStorage({
      id: expensesId,
      name: name.value,
      jan: jan.value,
      fab: fab.value,
      mar: mar.value,
      apr: apr.value,
      may: may.value,
      jun: jun.value,
      july: july.value,
      aug: aug.value,
      sep: sep.value,
      oct: oct.value,
      nov: nov.value,
      dec: dec.value,
      sum:
        parseFloat(jan.value) +
        parseFloat(fab.value) +
        parseFloat(mar.value) +
        parseFloat(apr.value) +
        parseFloat(may.value) +
        parseFloat(jun.value) +
        parseFloat(july.value) +
        parseFloat(aug.value) +
        parseFloat(sep.value) +
        parseFloat(oct.value) +
        parseFloat(nov.value) +
        parseFloat(dec.value),
    });
  }

  jan.value = "";
  fab.value = "";
  mar.value = "";
  apr.value = "";
  may.value = "";
  jun.value = "";
  july.value = "";
  aug.value = "";
  sep.value = "";
  oct.value = "";
  nov.value = "";
  dec.value = "";

  calcByMonth();
});

typeSwitch.addEventListener("click", (e) => {
  if (e.target.textContent.trim() === "Income") {
    typeSwitch.textContent = "Expenses";
    typeSwitch.style.backgroundColor = "#737b83";
  } else if (e.target.textContent.trim() === "Expenses") {
    typeSwitch.textContent = "Income";
    typeSwitch.style.backgroundColor = "#ffc414";
  }
});

function calcByMonth() {
  let income = JSON.parse(localStorage.getItem("income")) || [];
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  let numJan = 0;
  let numFab = 0;
  let numMar = 0;
  let numApr = 0;
  let numMay = 0;
  let numJun = 0;
  let numJuly = 0;
  let numAug = 0;
  let numSep = 0;
  let numOct = 0;
  let numNov = 0;
  let numDec = 0;
  let numSummary = 0;

  let expJan = 0;
  let expFab = 0;
  let expMar = 0;
  let expApr = 0;
  let expMay = 0;
  let expJun = 0;
  let expJuly = 0;
  let expAug = 0;
  let expSep = 0;
  let expOct = 0;
  let expNov = 0;
  let expDec = 0;
  let expSummary = 0;

  income.forEach((e) => {
    numJan += parseFloat(e.jan);
    numFab += parseFloat(e.fab);
    numMar += parseFloat(e.mar);
    numApr += parseFloat(e.apr);
    numMay += parseFloat(e.may);
    numJun += parseFloat(e.jun);
    numJuly += parseFloat(e.july);
    numAug += parseFloat(e.aug);
    numSep += parseFloat(e.sep);
    numOct += parseFloat(e.oct);
    numNov += parseFloat(e.nov);
    numDec += parseFloat(e.dec);
    numSummary += parseFloat(e.sum);
  });

  expenses.forEach((e) => {
    expJan += parseFloat(e.jan);
    expFab += parseFloat(e.fab);
    expMar += parseFloat(e.mar);
    expApr += parseFloat(e.apr);
    expMay += parseFloat(e.may);
    expJun += parseFloat(e.jun);
    expJuly += parseFloat(e.july);
    expAug += parseFloat(e.aug);
    expSep += parseFloat(e.sep);
    expOct += parseFloat(e.oct);
    expNov += parseFloat(e.nov);
    expDec += parseFloat(e.dec);
    expSummary += parseFloat(e.sum);
  });

  incomeJan.innerHTML = numJan;
  incomeFab.innerHTML = numFab;
  incomeMar.innerHTML = numMar;
  incomeApr.innerHTML = numApr;
  incomeMay.innerHTML = numMay;
  incomeJun.innerHTML = numJun;
  incomeJuly.innerHTML = numJuly;
  incomeAug.innerHTML = numAug;
  incomeSep.innerHTML = numSep;
  incomeOct.innerHTML = numOct;
  incomeNov.innerHTML = numNov;
  incomeDec.innerHTML = numDec;
  incomeSum.innerHTML = numSummary;

  expensesJan.innerHTML = expJan;
  expensesFab.innerHTML = expFab;
  expensesMar.innerHTML = expMar;
  expensesApr.innerHTML = expApr;
  expensesMay.innerHTML = expMay;
  expensesJun.innerHTML = expJun;
  expensesJuly.innerHTML = expJuly;
  expensesAug.innerHTML = expAug;
  expensesSep.innerHTML = expSep;
  expensesOct.innerHTML = expOct;
  expensesNov.innerHTML = expNov;
  expensesDec.innerHTML = expDec;
  expensesSum.innerHTML = expSummary;
}

tableIncome.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
    deleteIncome(e.target.id);
    calcByMonth()
  }
});

tableExpenses.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
    deleteExpenses(e.target.id);
    calcByMonth()
  }
});

function saveIncomeStorage(data) {
  var a = [];

  a = JSON.parse(localStorage.getItem("income")) || [];

  a.push(data);

  localStorage.setItem("income", JSON.stringify(a));
}

function saveExpensesStorage(data) {
  var b = [];

  b = JSON.parse(localStorage.getItem("expenses")) || [];

  b.push(data);

  localStorage.setItem("expenses", JSON.stringify(b));
}

function deleteIncome(id) {
  const incomeList = JSON.parse(localStorage.getItem("income"));

  incomeList.forEach((list, index) => {
    if (list.id == id) {
      incomeList.splice(index, 1);
    }
  });

  localStorage.setItem("income", JSON.stringify(incomeList));
}

function deleteExpenses(id) {
  const expensesList = JSON.parse(localStorage.getItem("expenses"));

  expensesList.forEach((list, index) => {
    if (list.id == id) {
      expensesList.splice(index, 1);
    }
  });

  localStorage.setItem("expenses", JSON.stringify(expensesList));
}

document.addEventListener("DOMContentLoded", getList());

function getList() {
  let income = JSON.parse(localStorage.getItem("income")) || [];

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  if (income.length > 0) {
    income.forEach((data) => {
      tableBodyIncome.innerHTML += `
            <tr id="${data.id}">
                <td scope="row"><i id='${
                  data.id
                }' class="far fa-minus-square delete"></i></td>
                <td scope="row">${data.name}</td>
                <td scope="row">${data.jan}</td>
                <td scope="row">${data.fab}</td>
                <td scope="row">${data.mar}</td>
                <td scope="row">${data.apr}</td>
                <td scope="row">${data.may}</td>
                <td scope="row">${data.jun}</td>
                <td scope="row">${data.july}</td>
                <td scope="row">${data.aug}</td>
                <td scope="row">${data.sep}</td>
                <td scope="row">${data.oct}</td>
                <td scope="row">${data.nov}</td>
                <td scope="row">${data.dec}</td>
                <td scope="row">${
                  parseFloat(data.jan) +
                  parseFloat(data.fab) +
                  parseFloat(data.mar) +
                  parseFloat(data.apr) +
                  parseFloat(data.may) +
                  parseFloat(data.jun) +
                  parseFloat(data.july) +
                  parseFloat(data.aug) +
                  parseFloat(data.sep) +
                  parseFloat(data.oct) +
                  parseFloat(data.nov) +
                  parseFloat(data.dec)
                }</td>
            </tr>
            `;
    });
  }

  if (expenses.length > 0) {
    expenses.forEach((data) => {
      tableBodyExpenses.innerHTML += `
              <tr id="${data.id}">
                  <td scope="row"><i id='${
                    data.id
                  }' class="far fa-minus-square delete"></i></td>
                  <td scope="row">${data.name}</td>
                  <td scope="row">${data.jan}</td>
                  <td scope="row">${data.fab}</td>
                  <td scope="row">${data.mar}</td>
                  <td scope="row">${data.apr}</td>
                  <td scope="row">${data.may}</td>
                  <td scope="row">${data.jun}</td>
                  <td scope="row">${data.july}</td>
                  <td scope="row">${data.aug}</td>
                  <td scope="row">${data.sep}</td>
                  <td scope="row">${data.oct}</td>
                  <td scope="row">${data.nov}</td>
                  <td scope="row">${data.dec}</td>
                  <td scope="row">${
                    parseFloat(data.jan) +
                    parseFloat(data.fab) +
                    parseFloat(data.mar) +
                    parseFloat(data.apr) +
                    parseFloat(data.may) +
                    parseFloat(data.jun) +
                    parseFloat(data.july) +
                    parseFloat(data.aug) +
                    parseFloat(data.sep) +
                    parseFloat(data.oct) +
                    parseFloat(data.nov) +
                    parseFloat(data.dec)
                  }</td>
              </tr>
              `;
    });
  }
  calcByMonth();
}
