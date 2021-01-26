const container = document.querySelector('#container')
container.addEventListener('click', (e) => {
    let classes = e.target.dataset.toggleClass;
    if (!classes) return;

    let elem = e.target.closest('.pane');
    elem.remove();

})