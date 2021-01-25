// this is the question


// button.addEventListener("click", () => alert("1"));

// button.removeEventListener("click", () => alert("1"));

// button.onclick = () => alert(2);

const button = document.querySelector('button');
// this is the answer:
button.addEventListener("click", () => alert("1"));
button.onclick = () => alert(2);

// the remove doesn't work because this is not the same function exactly