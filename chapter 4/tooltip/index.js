let body = document.querySelector('body');
let target;
let div;
let tooltip;

body.addEventListener('mouseover', (e) => {
    
    target = e.target;
    tooltip = target.dataset.tooltip;

    if (tooltip) { 
        let myBtns = target;
        div = document.createElement('div');
        div.className = 'tooltip';
        div.innerHTML = tooltip;
        body.appendChild(div)
        
        let coords = target.getBoundingClientRect();
        
        let top = coords.top - div.offsetHeight - 5;
        let left = coords.left / 2;
        if (coords.left < 0) left = 0; 
        if (top < 0) { 
            top = coords.top + target.offsetHeight + 5;
        }
        
        div.style.left = left + 'px';
        div.style.top = top + 'px';
    }
})
body.addEventListener('mouseout', (e) => {
    if(tooltip) {
        div.remove();
    }
})