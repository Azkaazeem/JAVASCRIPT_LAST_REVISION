let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;
    let dltBtn = document.createElement("button");
    dltBtn.innerText = "X";
    dltBtn.classList.add("delete");
    item.appendChild(dltBtn);
    ul.appendChild(item);
    inp.value = "";
    
})