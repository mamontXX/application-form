let name = prompt("Ваше имя?");
let surname = prompt("Ваша фамилия?");
let patronymic = prompt("Ваше отчество?");
let age = prompt("Ваш возраст?");
let dateofbirth =prompt("1997,11,10");
let sex = confirm("Ваш пол - мужской?");
alert(surname+" "+ name +" "+ patronymic);
alert("Ваш возраст в годахage"+" "+ age);
let days = Math.floor((new Date() - new Date(dateofbirth)) / (1000 * 60 * 60 * 24));
alert("Ваш возраст в днях"+" "+days);
let time= +age + 5;
alert("Через 5 лет вам будет"+" "+ time);
if(sex === true){
  alert("Ваш пол мужской");
}else{
  alert("Ваш пол женский");
};
if (sex  === true && age >= 55) {
  alert("Вы на пенсии");
} else if (sex === false && age >= 65) {
  alert("Вы на пенсии");
} else {
  alert("вы работаете");
};