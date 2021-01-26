const a = document.querySelectorAll('a');
let a0 = a[0];
console.log(a[0]);

a0.addEventListener('click', () => {
    (mose(href));
    let href = this.getAttribute('href');
    

    function mose (href) {
        let check = confirm('are you sure?');
        console.log('hi');
        if(!check) {
        return false;
        }
    }
})
