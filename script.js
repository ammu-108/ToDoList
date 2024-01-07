const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const natureImages = [
   // 'images/pic1.jpg',
    //'images/pic2.jpg',
   // 'images/pic3.jpg',
    //'images/pic4.jpg',
   // 'images/pic5.jpg',
    'images/pic6.jpg',
    //'images/pic7.jpg',
    //'images/pic8.jpg',
    // Add more image filenames as needed
  ];

function setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * natureImages.length);
    const randomImage = natureImages[randomIndex];
    document.body.style.backgroundImage = `url('${randomImage}')`;
}
  

const currentDate = new Date();
const storageKey = `tasks_${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

function addTask(){
    if(inputBox.value === ''){
        alert("You must enter your task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
        saveData();
    }
    inputBox.value= "";
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }   
},false);

function saveData(){
    localStorage.setItem(storageKey, listContainer.innerHTML);
}
function showTask(){
    const savedTasks = localStorage.getItem(storageKey);
    if(savedTasks){
        listContainer.innerHTML = savedTasks;
    }
}

setRandomBackground();
showTask();
  