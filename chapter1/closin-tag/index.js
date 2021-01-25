const divs = document.querySelectorAll('.pane')

for (let i = 0; i < divs.length; i++) {
    divs[i].insertAdjacentHTML("afterbegin",'<button class="remove-button">[x]</button>')
    divs[i].firstChild.addEventListener("click", function() {
        divs[i].style.display = 'none';
    })
}
