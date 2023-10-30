// 5-masala
alert("3 ta sondan eng kattasini chiqarib beruvchi dastur")

let num1 = +prompt("1-sonni kiriting");
let num2 = +prompt("2-sonni kiriting");
let num3 = +prompt("3-sonni kiriting");

if(num1>num2 && num1>num3) {
    alert(num1)
} else if(num2>num1 && num2>num3) {
    alert(num2)
} else {
    alert(num3)
}