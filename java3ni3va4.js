// 3)
alert("kiritgan soninggiz 5 va 4 ga bo'linishini aniqlaydigan dastur")

let num = +prompt("Son kiriting");

if (num % 3 == 0 && num % 5 == 0) {
  alert(`${num} soni 3 va 5 ga bo'linadi`);
}
// 4) 
else {
  alert(`${num} soni 3 va 5 ga bo'linmaydi`);
}