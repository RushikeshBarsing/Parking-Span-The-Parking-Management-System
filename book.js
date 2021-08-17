let submit = document.querySelector('#submit');

submit.addEventListener('click',()=>{
  let data = extractData();
  let cars = localStorage.getItem('parked-cars');
  if(!cars) cars = "[]";
  cars = JSON.parse(cars);
  cars.push(data);
  cars = JSON.stringify(cars);
  localStorage.setItem('parked-cars',cars);
  window.location.href = 'index.html';
});

function extractData() {
  let fname = getData('inputname');
  let lname = getData('inputlname');
  let vname = getData('inputVechname');
  let vnum = getData('inputVechNumber');
  let entry = getData('entrydate');
  let exit = getData('exitdate');
  let wash = getData('express-wash');
  if (wash=='on') wash = 'Yes';
  else wash = 'No';
  let name = fname+" "+lname;
  return {name,vname,vnum,entry,exit,wash};
}

function getData(id) {
  return document.getElementById(id).value;
}

function toggleCheck() {
  let check = document.getElementById('express-wash');
  if (check.value=='on') {
    check.value = 'off';
  } else {
    check.value = 'on';
  }
}