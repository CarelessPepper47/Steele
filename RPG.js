
let weaponItems = [
    {sword: {
        damage: 5,
        range: 1,
        actionUse: 2
    }},
    {dagger: {
        damage: 3,
        range: 1,
        actionUse: 1
    }},
    {bow: {
        damage: 4,
        range: 3,
        actionUse: 2
    }}
]

let classes = [
    {
    name: "Warrior", 
    weapon: weaponItems[0],
    health: 150,
    backpack: [],
    actions: 5
    },

    {
    name: "Rogue",
    weapon: weaponItems[1],
    health: 100,
    backpack: ["key", weaponItems[2]],
    actions: 7
    }
]

let classDiv;

function start() {
    let playerName = prompt("Enter your name:");
    document.getElementById("info").classList.remove("hidden")
    document.getElementById("stats").classList.remove("hidden")
    document.getElementById("name").innerText = playerName;
    document.getElementById("start").classList.add("hidden");
    let uiSelection = document.getElementById("ui")
    for (let i = 0; i < classes.length + 1; i++) {
        classDiv = document.createElement("div");
        classDiv.classList.add("class"); // Adding the additional class
        classDiv.classList.add("w-1/2");
        classDiv.classList.add("h-screen");
        classDiv.textContent = classes[i]["name"];
        if (classDiv.textContent === "Warrior") {
            classDiv.classList.add("warrior")
        } else if (classDiv.textContent === "Rogue") {
            classDiv.classList.add("rogue")
        }
        uiSelection.appendChild(classDiv);
    }
    // chooseClass()
}



// function chooseClass() {
//     let classChoice = document.createElement("div")
//     classChoice.classList.add("bg-black")
//     classChoice.classList.add("w-1/2")
//     classChoice.classList.add("h-screen")
//     classChoice.innerText = "dupa"
//     let num = classes.length
//     // showClasses(classChoice, num)
//     document.getElementById("ui").append(classChoice)
// }

// function showClasses(classChoice, num) {

// }