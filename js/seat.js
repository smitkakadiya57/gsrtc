const express = [
  ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1", "I1"],
  ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2", "I2"],
  ["A3", "B3", "C3", "D3", "E3", "F3", "G3", "H3", "I3"],
  [0, 0, 0, 0, 0, 0, 0, 0, "I4"],
  ["A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4", "I5"],
  ["A5", "B5", "C5", "D5", "E5", "F5", "G5", "H5", "I6"],
];

console.log(express.length);
console.log(express[0].length);

const cap = express.length * express[0].length;
const sea_container = document.querySelector(".seat_container");

for (let i = 0; i < express.length; i++) {
  for (let j = 0; j < express[0].length; j++) {
    if (express[i][j] == 0) {
      sea_container.innerHTML += `    <div class="balcony"> </div>
        `;
    } else {
      sea_container.innerHTML += `    <div class="seat"> 
      <img src="img/seat.png" alt="">
      <input type="checkbox" id="${express[i][j]}" name="${express[i][j]}">
      
      </div>
        `;
    }
  }
}
