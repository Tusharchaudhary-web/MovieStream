// for (let i = 1; i <= 6; i++) {
//   let btn = document.querySelector(`.MovieStreambtn${i}`);
//   let content = document.querySelector(`.MovieStreamcontent${i}`);
//   let icon = document.querySelector(`.icon${i}`);

//   btn.addEventListener('click', () => {
//     content.classList.toggle('show');
//     icon.textContent = content.classList.contains('show') ? '✖' : '➕';
//   });
// }





let MovieStreambtn1 = document.querySelector('.MovieStreambtn1');
let MovieStreamcontent1 = document.querySelector('.MovieStreamcontent1');
let icon1 = document.querySelector('.icon1');
MovieStreambtn1.addEventListener('click', () => {
    MovieStreamcontent1.classList.toggle('show');
    icon1.textContent = MovieStreamcontent1.classList.contains('show') ? '✖' : '➕';
})



let MovieStreambtn2 = document.querySelector('.MovieStreambtn2');
let MovieStreamcontent2 = document.querySelector('.MovieStreamcontent2');
let icon2 = document.querySelector('.icon2');

MovieStreambtn2.addEventListener('click', () => {
    MovieStreamcontent2.classList.toggle('show');
    icon2.textContent = MovieStreamcontent2.classList.contains('show') ? '✖' : '➕';
})



let MovieStreambtn3 = document.querySelector('.MovieStreambtn3');
let MovieStreamcontent3 = document.querySelector('.MovieStreamcontent3');
let icon3 = document.querySelector('.icon3');

MovieStreambtn3.addEventListener('click', () => {
    MovieStreamcontent3.classList.toggle('show');
    icon3.textContent = MovieStreamcontent3.classList.contains('show') ? '✖' : '➕';
});





let MovieStreambtn4 = document.querySelector('.MovieStreambtn4');
let MovieStreamcontent4 = document.querySelector('.MovieStreamcontent4');
let icon4 = document.querySelector('.icon4');

MovieStreambtn4.addEventListener('click', () => {
    MovieStreamcontent4.classList.toggle('show');
    icon4.textContent = MovieStreamcontent4.classList.contains('show') ? '✖' : '➕';
});





let MovieStreambtn5 = document.querySelector('.MovieStreambtn5');
let MovieStreamcontent5 = document.querySelector('.MovieStreamcontent5');
let icon5 = document.querySelector('.icon5');

MovieStreambtn5.addEventListener('click', () => {
    MovieStreamcontent5.classList.toggle('show');
    icon5.textContent = MovieStreamcontent5.classList.contains('show') ? '✖' : '➕';
});




let MovieStreambtn6 = document.querySelector('.MovieStreambtn6');
let MovieStreamcontent6 = document.querySelector('.MovieStreamcontent6');
let icon6 = document.querySelector('.icon6');

MovieStreambtn6.addEventListener('click', () => {
    MovieStreamcontent6.classList.toggle('show');
    icon6.textContent = MovieStreamcontent6.classList.contains('show') ? '✖' : '➕';
});