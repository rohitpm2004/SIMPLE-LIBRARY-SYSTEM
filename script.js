
let hidebtn = document.querySelector(".button1")
let hidediv = document.querySelector(".hide")
let addbtn = document.querySelector(".button2")
let addbox  = document.querySelector(".addbox")
let inputTitle = document.querySelector(".inputTitle")
let inputName = document.querySelector(".inputName")
let p1 = document.querySelector(".pofbox")
let select = document.querySelector("#option")


// this is to hide the content on the page
let click = "start"
console.log(hidediv)
hidebtn.addEventListener("click",()=>{
    if(click == "start"){
    hidediv.style.display = "none"
    hidebtn.innerText = "Show Form"
    click = "stop"
    }else{
    hidediv.style.display = "block"
    hidebtn.innerText = "HIDE FORM"
    click = "start"
    }
})

//this is to add book in container

addbtn.addEventListener("click",()=>{
    if(inputTitle.value.trim()  == "" || inputName.value.trim()  == ""){
        alert("please enter the details properly")
    }
    else{
        let divForBox = document.createElement("div")
        divForBox.setAttribute("class","box")
        addbox.appendChild(divForBox)

        let h1forTitle = document.createElement("h1")
        h1forTitle.setAttribute("class","h1fortitle")
        h1forTitle.innerText = inputTitle.value.toUpperCase()
        divForBox.appendChild(h1forTitle)

        let p2 = document.createElement("p")
        p2.setAttribute("class","pinbox")
        p2.style.marginInlineStart = "20px"
        p2.innerText = `Author : ${inputName.value.toUpperCase()}`
        divForBox.appendChild(p2)
        
        let p4 = document.createElement("p")
        p4.setAttribute("class","pforstatus")
        p4.innerText = `Available`


        let p3 = document.createElement("p")
        p3.setAttribute("class","pinbox")
        p3.style.marginInlineStart = "20px"
        p3.innerText = `STATUS : ${p4.innerText}`
        divForBox.appendChild(p3)

        let p5 = document.createElement("p")
        p5.setAttribute("class","pinbox")
        p5.style.marginInlineStart = "20px";
        p5.innerText = `${select.value.toUpperCase()}`
        divForBox.appendChild(p5)

        let divForButton = document.createElement("div")
        divForButton.setAttribute("class","divForButton")
        divForBox.appendChild(divForButton)

        let buttonForBorrow = document.createElement("button")
        buttonForBorrow.setAttribute("class","buttonForBorrow")
        buttonForBorrow.innerText = "Borrow"
        divForButton.appendChild(buttonForBorrow)

        let buttonForRemove = document.createElement("button")
        buttonForRemove.setAttribute("class","buttonForRemove")
        buttonForRemove.innerText = "Remove"
        divForButton.appendChild(buttonForRemove)

        
        buttonForRemove.addEventListener("click",()=>{
        divForBox.remove()
        
})
        
        buttonForBorrow.addEventListener("click",()=>{
            if(p4.innerText == "Available"){
            p4.innerText = "Borrowed"
            
            buttonForBorrow.innerText = "Return"
            }else{
                p4.innerText = "Available"
            
                buttonForBorrow.innerText = "Borrow"
            }
            p3.innerText = `STATUS : ${p4.innerText}`
        })



}

    // inputName.value = ""
    // inputTitle.value = ""
    p1.style.display = "none"
})


