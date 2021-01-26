const thumbs = document.querySelector('#thumbs');
let largeImg = document.querySelector('#largeImg')
console.log(thumbs);

thumbs.addEventListener('click', (e) => {
    let smallPic = e.target.closest('a');
    if (smallPic) {
        showSmall(smallPic.href, smallPic.title);
        console.log(smallPic.href, smallPic.title);
        e.preventDefault();
    }
    return;
    
})

function showSmall (href, title) {
    largeImg.src = href;
    largeImg.title = title;
}
