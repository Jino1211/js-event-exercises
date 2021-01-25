const divList = document.querySelector('#nav');
const span = document.querySelector('span');


span.addEventListener('click', function (){
    divList.classList.toggle('open');
    console.log('hi');
})
