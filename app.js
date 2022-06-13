const add = document.querySelector(".btn");
const input = document.querySelector("input");
const listeDiv = document.querySelector(".liste");

const ul = document.createElement("ul");
listeDiv.appendChild(ul);

add.addEventListener("click", () => {
    if(!input.value) {
        alert("Enter a to-do item please!")
    } else {
        ul.innerHTML += `<li><div><i class="far fa-check-square"></i></div>${input.value.toUpperCase()}<div><i class="fa-solid fa-trash-can"></i></div></li>`;
        input.value ="";
        input.focus();
        document.querySelectorAll("li").forEach((x) => {
        x.setAttribute("class", "todolist");
        });

    }

});

// const check = document.querySelector(".form-check-input");
// const trash = document.querySelector("li i");

listeDiv.addEventListener("click", (event) => {
    if (event.target.classList.contains("fa-solid"))  {
        event.target.parentElement.parentElement.remove();
         input.focus();
    }
    if(event.target.classList.contains("far")) {
        if (event.target.classList.contains("checked")) {
            event.target.classList.remove("checked");
            event.target.parentElement.parentElement.classList.remove("checked");
            input.focus();
            
        } else {
            event.target.classList.add("checked");
            event.target.parentElement.parentElement.classList.add("checked");
            input.focus();
            
        }
        
}
        

});




input.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        add.click();
    }
});

window.onload = () => {
    input.focus();

};

