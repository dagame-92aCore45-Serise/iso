let totalScore = 0;
let avg = 0;
let studentId = 0;
let rank;
const form = document.getElementById('formsubmit');
const table = document.getElementById('table');
//
form.addEventListener('submit', function (e) {
  e.preventDefault();

  let name = document.getElementById('Ntxt').value;
  let charp = Number(document.getElementById('c#').value);
  let java = Number(document.getElementById('java').value);
  let gd = Number(document.getElementById('gd').value);
  let ux = Number(document.getElementById('ux').value);
  let dsa = Number(document.getElementById('dsa').value);
  let date = document.getElementById('date').value;
  let gender = document.querySelector('input[name="Gender"]:checked');

  if (!/^[a-zA-Z\u1780-\u17FF\s]+$/.test(name)) {
    alert('Student name must contain only letters (English or Khmer)');
    e.preventDefault();
    return;
  }
  if (isNaN(charp) || isNaN(java) || isNaN(gd) || isNaN(ux) || isNaN(dsa)) {
    alert('Please enter valid numeric values for all scores');
    return;
  }

  // Check if number is in the valid range 0–100
  if (charp < 0 || charp > 100) {
    alert('Please complete again on Charp Score from 0 to 100');
    return;
  }
  if (java < 0 || java > 100) {
    alert('Please complete again on Java Score from 0 to 100');
    return;
  }
  if (gd < 0 || gd > 100) {
    alert('Please complete again on GD Score from 0 to 100');
    return;
  }
  if (ux < 0 || ux > 100) {
    alert('Please complete again on UX/UI Score from 0 to 100');
    return;
  }
  if (dsa < 0 || dsa > 100) {
    alert('Please complete again on DSA Score from 0 to 100');
    return;
  }

  let score = charp + java + gd + ux + dsa;
  totalScore = score;
  let avg = (totalScore / 5).toFixed(2);
  studentId++;
  // Rank
  if (avg >= 0 && avg <= 49) {
    rank = ' F';
  }

  if (avg >= 50 && avg <= 59) {
    rank = ' E';
  }

  if (avg >= 60 && avg <= 70) {
    rank = ' D';
  }

  if (avg >= 71 && avg <= 80) {
    rank = ' C';
  }

  if (avg >= 81 && avg <= 90) {
    rank = ' B';
  }

  if (avg >= 91) {
    rank = ' A';
  }

  const row = table.insertRow();
  row.innerHTML = `
  <td>${studentId}</td>
  <td>${name}</td>
  <td>${gender.value}</td>
  <td>${charp}</td>
  <td>${java}</td>
  <td>${gd}</td>
  <td>${ux}</td>
  <td>${dsa}</td>
  <td>${totalScore}</td>
  <td>${avg}</td>
  <td>${rank}</td>
  <td>${date}</td>
 
  `;
});
function printTable() {
  const table = document.getElementById('table');
  // check if table has data (not only header)
  if (table.rows.length <= 1) {
    alert('No data to print! Please fill the Form');
    return;
  }
  window.print();
}

document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && e.key === 'p') {
    e.preventDefault();
    const table = document.getElementById('table');
    // check if table has data (not only header)
    if (table.rows.length <= 1) {
      alert('No data to print! Please fill the Form');
      return;
    }
    window.print(); // print using @media print CSS
  }
});
