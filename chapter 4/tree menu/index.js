const mainUl = document.querySelector('#tree');

mainUl.addEventListener('click', (e) => {
    let target = e.target;
    console.log(target.className);
    if (target.className !== 'title') return;

    closeUl(e);

    function closeUl (e) {
       let closeList = e.target.parentNode.querySelector('ul');
       console.log(closeList);
       closeList.hidden = !closeList.hidden;
    }
})