let ul = document.querySelector('ul');

ul.addEventListener('click', (e) => {
    let target = e.target;
    if (e.ctrlKey) {
        target.classList.toggle('selected');
    } else {
        singleSelect(target)
    }
});
      
function singleSelect (target) {
    let select = ul.getElementsByClassName('selected')
    for (let i = 0; i < select.length; i++){
        if (select[i].className === 'selected') {
            select[i].classList.remove('selected')
        }
    }
    target.classList.toggle('selected');     
}