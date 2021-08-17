function addCars() {
  let table = document.getElementById('cars-table');
  let cars = localStorage.getItem('parked-cars');
  if(!cars) cars = "[]";
  cars = JSON.parse(cars);
  if (cars.length==0) {
    // document.body.removeChild(table);
    table.remove();
    return;
  }
  cars.forEach(car=>{
    let tr = document.createElement('tr');
    for(item in car) {
      let td = document.createElement('td');
      td.innerText = car[item];
      tr.appendChild(td);
    }
    let td = document.createElement('td');
    let btn = document.createElement("button");
    btn.classList.add("remove-btn");
    btn.innerText = "X";
    btn.addEventListener('click',()=>{
      removeCar(car.vnum);
    });
    td.appendChild(btn);
    tr.appendChild(td);
    table.appendChild(tr);
  });
}

function removeCar(num) {
  
  let cars = localStorage.getItem('parked-cars');
  if(!cars) cars = "[]";
  cars = JSON.parse(cars);
  cars = cars.filter(({vnum})=>vnum!=num);
  cars = JSON.stringify(cars);
  localStorage.setItem('parked-cars',cars);
  window.location.reload();
}

addCars();