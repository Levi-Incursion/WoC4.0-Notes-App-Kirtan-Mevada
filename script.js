const addListBtn = document.querySelector("#add-list-btn")
let containerEl = document.querySelector(".container")
let containerStorage = JSON.parse(localStorage.getItem("Container")) //container object
let cardStorage = [] //card storage array
let taskStorage = [] //task storage array
// localStorage.clear()

addListBtn.addEventListener("click",function (){
    let innerPrompt = prompt("Please Add the Title of New Notes List") 
    if (innerPrompt === null || innerPrompt === ""){
        alert("Please enter a Valid Title")
    } else{
        newCard(innerPrompt)
        // updateCardStorage(innerPrompt), baadmei karte hai
    }   
    })

function newCard(newTitle) { 
    // updateCardStorage(newTitle)
    let Items = ""
        Items +=`<div class="card">
        <h2 class="headings">${newTitle} </h2>
        <ul>
        </ul>
            <button class="btns" id="add-tsk-btn" style="background:lime"><i class="fas fa-plus-circle"></i> Add a Task</button>
            <button class="btns" id="del-list-btn" style="background:crimson;"><i class="fas fa-minus-square"></i> Delete List</button>
        </div>`
    // <li>Task 1<button id="edit-btn"><i class="far fa-edit"></i></button><button id="del-tsk-btn"><i class="fas fa-trash-alt"></i></button></li>
    containerEl.innerHTML += Items
   updateCardStorage(newTitle);
}
// function rendering(listItems) {
//     container.innerHTML += listItems
// }
// LocalStorage ke liye sabhse pehle ye cheeze dimagg mei rakhni hogi; JSON Stringify (object/array to strings) aur JSON Parse (strings to Object/array)
// ki card ka title array ka title hoga, aur uske andar list items elements honge, array ke
// phir, woh array card array ban jaega
// uske andar ham container ka object banake saare cards as arrays store karenge
// agar koi list delete hogya, toh refresh function se woh container ke elements update ho jaenge
// Next, add task ke liye jho maine previously kiya, usse use karke add task function banaenge
// localStorage apne aap refresh karna hoga, waisa ek function shayad banana hoga
// phir, edit karne ke liye previous default se replace karke prompt banana hai, usko list item se ${} edit kardena hai with = sign only
// finally, bas delete list function ka thod dhundhna hai; .active element se kuch kar sakte hai.
// rendering ka ek function banana hoga
// aisa kuch storage hona chahiye :
//  Container = {
//     card1: [task1,task2,tast3],
//     card2: [tast4,task5,task6],
//     ... waisa kuch
// }

containerEl.addEventListener("click", (Event) => {
    if (Event.target.TagName === "BUTTON"){
        console.log("testing testing")
        const trigBtn = Event.target;
        if (trigBtn.textContent == " Add a Task" ){
            console.log("add Testing")
        }
        let taskPrompt = prompt("Please Enter a New Task")
        if (taskPrompt == null || taskPrompt == ""){
            alert("Please add a Valid Task!")
        } else {
            addTask(taskPrompt)
    }
    updateContainerStorage(taskPrompt)
    }
})

function addTask(newContents){
    let ulEl = document.getElementByTagName("id").parentNode;
    let task = `<li id="fst-li">
                    <span class="spanSpace">${newContents}</span>
                    <button id="edit-btn"><i class="far fa-edit"></i>
                    </button><button id="del-tsk-btn">
                    <i class="fas fa-trash-alt"></i></button>
                </li>`
    ulEl.innerHTML += task
    updateTaskStorage(newContents)  
    // baadmei sochte hai
}
editTaskBtn.addEventListener("click",function(Event){
    console.log("testing")
    let liEditEl = editTaskBtn.parentNode;
    // let ulEditEl = Event.Target.liEditEl
    if (liEditEl == null || liEditEl == ""){
        alert('Please edit a Valid Task!')
    } else {
        editingEl.contentEditable = "true" 
    }
})
delBtn.addEventListener("click",function(){
    let liDelEl = delBtn.parentNode;
    const ulDelEl = liDelEl.parentNode; 
    let delConfirm = confirm('Are You Sure to Delete This List!')
    if (delConfirm == "true"){
        ulDelEl.removeChild(liDelEl)
    }
})
// function updateTaskStorage(taskContents){
//     if (localStorage.getItem("Tasks") == null){
//         taskStorage.push(taskContents)
//         localStorage.setItem("Tasks",JSON.stringify(taskStorage))
//     } else { 
//         let oldTasks = JSON.parse(localStorage.getItem("Tasks"))
//         oldTasks.push(taskContents)
//         localStorage.setItem("Tasks",JSON.stringify(oldTasks))
    // }
// }
function updateCardStorage(newCard){
    if (localStorage.getItem("Cards") == null){
        cardStorage.push(newCard)
        localStorage.setItem("Cards",JSON.stringify(cardStorage))
    } else {
        let oldCardStorage = JSON.parse(localStorage.getItem("Cards"))
        oldCardStorage.push(newCard)
        localStorage.setItem("Cards",JSON.stringify(oldCardStorage))
    }
}

function updateContainerStorage(newCardS){
    if (localStorage.getItem("Container") == null){
        containerStorage.push(newCardS) //newCard title
        localStorage.setItem("Container",JSON.stringify(containerStorage))
    } else {
        let oldContainer = JSON.parse(localStorage.getItem("Container"))
        oldContainer.push(newCardS)
        localStorage.setItem("Container",JSON.stringify(oldContainer))
    }
} //I don't know how to do this storage of cards array and tasks array into a container object.
