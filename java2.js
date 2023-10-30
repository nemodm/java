// 2-masala
alert("Olgan ballaringizni baholaydigan dastur")

let num = prompt("O'z balingizni yozing");

if(num >0 && num <56) {
    alert("Yomon");
} else if(num >= 56 && num < 71) {
    alert("3 baho");
} else if(num >=71 && num <86) {
    alert("4 baho");
} else if(num >=86 && num <=100) {
    alert("5 baho!");
} else {
    alert("hatolik yuz berdi yoki juda kop honali son yozdingiz")
}
