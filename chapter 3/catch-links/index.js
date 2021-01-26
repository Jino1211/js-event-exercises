const contents = document.querySelector('#contents');
const a = document.querySelectorAll('a');
let href = [];
let counter = 0;


console.log(href);
contents.addEventListener('click', (e) => {
    for (let i of a) {
        href[counter] = i.getAttribute('href');
        counter++;
        }
        mose(href);
        function mose (href) {
            let check = confirm('are you sure?');
            if (!check) {
                e.preventDefault();
            }
        }
    })