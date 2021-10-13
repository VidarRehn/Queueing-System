

let addButton = document.querySelector("#add-button");
let fastTrackButtonMain = document.querySelector("#fast-track-button");
let queueList = document.querySelector("#queue");
let checkedInList = document.querySelector("#checked-in");

let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let telephoneNumber = document.querySelector("#telephone");

[addButton, fastTrackButtonMain].forEach((button) =>{
    button.addEventListener("click", (x)=> {
        let newInput = document.createElement("li");
        newInput.classList.add("list-input");
        let nameSpan = document.createElement("span");
        nameSpan.classList.add("full-name");
        nameSpan.innerText = `${firstName.value.toUpperCase()} ${lastName.value.toUpperCase()}`;
        let numberSpan = document.createElement("a");
        numberSpan.classList.add("number");
        numberSpan.href = telephoneNumber.value;
        numberSpan.innerText = telephoneNumber.value;

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Remove";
        deleteButton.classList.add("delete-button");
        let fastTrackButton = document.createElement("button");
        fastTrackButton.innerText = "Fast Track";
        fastTrackButton.classList.add("fast-track-button-in-list");
        let checkInButton = document.createElement("button");
        checkInButton.innerText = "Check-in";

        newInput.append(nameSpan);
        newInput.append(numberSpan);
        newInput.append(fastTrackButton);
        newInput.append(deleteButton);
        
        firstName.value = "";
        lastName.value = "";
        telephoneNumber.value = "";

        if (button == addButton){
            if (queueList.childElementCount == 0){
                newInput.append(checkInButton);
                queueList.append(newInput);
            } else {
                queueList.append(newInput);
            }
        } else if (button == fastTrackButtonMain){
                newInput.append(checkInButton);
                queueList.firstElementChild.lastElementChild.remove();
                queueList.insertBefore(newInput, queueList.firstChild);
        }

        deleteButton.addEventListener("click", (x)=>{
            if (x.target.parentElement == queueList.firstElementChild){
                x.target.parentElement.remove();
                queueList.firstElementChild.append(checkInButton);
            } else {
                x.target.parentElement.remove();
            }
        })

        fastTrackButton.addEventListener("click", (x)=>{
            if (x.target.parentElement != queueList.firstElementChild){
                let fastTracked = x.target.parentElement;
                queueList.firstElementChild.lastElementChild.remove();
                queueList.insertBefore(fastTracked, queueList.firstChild);
                queueList.firstElementChild.append(checkInButton);
            }
        })

        checkInButton.addEventListener("click", (x)=>{
            let checkedInPerson = x.target.parentElement;
            if (queueList.childElementCount == 1){
                checkedInList.append(checkedInPerson);
                checkedInPerson.lastElementChild.remove();
                checkedInPerson.lastElementChild.remove();
                checkedInPerson.lastElementChild.remove();
            } else {
                x.target.parentElement.remove();
                queueList.firstChild.append(checkInButton);
                checkedInList.append(checkedInPerson);
                checkedInPerson.lastElementChild.remove();
                checkedInPerson.lastElementChild.remove();
            }
        })
    })
})
