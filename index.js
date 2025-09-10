const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

inputBox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !event.ctrlKey) {
        event.preventDefault();
        addTask();
    } else if (event.key === 'Enter' && event.ctrlKey) {
        inputBox.value += "\r\n";
    }
});

function addTask() {
    if (inputBox.value !== '') {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let img = document.createElement("img");
        img.src = "./Delete-Icon.svg";
        li.appendChild(img);
    }
    inputBox.value = '';
    saveTasks();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTasks();
    }
    else if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveTasks();
    }
}, false);

function saveTasks() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showtasks() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showtasks()