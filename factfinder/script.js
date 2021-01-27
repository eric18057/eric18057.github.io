var box = document.querySelector('#box');
var form = document.querySelector('form');


form.one.addEventListener("click",showOne);
form.two.addEventListener("click",showTwo);
form.three.addEventListener("click",showThree);
form.four.addEventListener("click",showFour);
form.five.addEventListener("click",showFive);

function showOne(){
	box.innerHTML ="<h>Students can code</h><img src='https://media.istockphoto.com/photos/female-pupil-building-robotic-car-in-science-lesson-picture-id1206218645?b=1&k=6&m=1206218645&s=170667a&w=0&h=0GWmgxkEM8cl3H4vEDg7-Rrxda4Zq8-HQGEDakaVwHY='>";
}
function showTwo(){
	box.innerHTML ="<h>Most of the people who drink water will dead in 100 years!</h><img src='https://cdn.pixabay.com/photo/2017/02/02/15/15/bottle-2032980__340.jpg'>";
}
function showThree(){
	box.innerHTML ="<h>Most of the people who sleep will dead in 100 years!</h><img src='https://media.istockphoto.com/photos/cute-corgi-sleeps-on-the-bed-with-eye-mask-live-with-schedule-time-to-picture-id1185231900?b=1&k=6&m=1185231900&s=170667a&w=0&h=4Bg2AH5ZFmwOGA5hq_8DkKnZ_jPgnUI_7M4jbJFQ6ro='>";
}
function showFour(){
	box.innerHTML ="<h>Most of the people who walk will dead in 100 years!</h><img src='https://media.istockphoto.com/photos/male-student-with-a-backpack-walking-picture-id1218775476?b=1&k=6&m=1218775476&s=170667a&w=0&h=afQoulqyLwIzLUC_0imKR0kJHnIixqjqyxTowlyBcMY='>";
}
function showFive(){
	box.innerHTML ="<h>Most of the people who breath will dead in 100 years!</h><img src='https://media.istockphoto.com/photos/young-woman-doing-breathing-exercise-picture-id1176660377?b=1&k=6&m=1176660377&s=170667a&w=0&h=0I9TdwJfFJPlkCkiUgD7o8pvBt7ji17oHQc_qD9nPxY='>";
}












