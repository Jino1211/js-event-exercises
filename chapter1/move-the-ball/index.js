const field = document.querySelector('#field');
const sizesFieldFromEdge = field.getBoundingClientRect();
const ball = document.querySelector('#ball');
console.log(sizesFieldFromEdge);


field.addEventListener('click', (event) => {
    calculateTheClick(event.clientX, event.clientY, field.clientLeft, field.clientTop); 
})


// the function calculate the distance from the click position to the edges(margin+padding)
function calculateTheClick (x, y, left, top) {
    let calculatePositionL = x - sizesFieldFromEdge.left - left - ball.clientWidth;
    let calculatePositionT = y - sizesFieldFromEdge.top - top - ball.clientHeight; 
    moveTheBall(calculatePositionL, calculatePositionT);
}

function moveTheBall(l,t) {
    let fixedL = l;
    let fixedT = t;
    if (l < 0) {
        fixedL = 0;
    }
    if (t < 0) {
        fixedT = 0;
    }
    ball.style.left = `${fixedL}px`;
    ball.style.top = `${fixedT}px`
}