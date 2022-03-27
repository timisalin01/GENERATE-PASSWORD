const passwordGen = document.querySelector('.generate-pass')
const allFieldsClear = document.querySelector('.clear-field')
const copyText = document.querySelector('.text-copy')
const chars = String.fromCharCode(...Array(123).keys()).slice(33)

let passBox = document.querySelectorAll('.pass-box')

passwordGen.addEventListener('click',randomPasswords)
allFieldsClear.addEventListener('click',fieldClear)
passBox.forEach(item => {item.addEventListener('click', copyClipboard)})

function randomPasswords() {
    let result = ''
    let arrayOfPass = []
    const lengthOfPass = 15

    for (let i = 0; i < 4; i++){
        result = ""

        for (let j = 0; j < lengthOfPass; j++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        arrayOfPass.push(result)
    }

    for (let k = 0; k < passBox.length; k++) {
        passBox[k].textContent = arrayOfPass[k]
    }
}

function copyClipboard() {
    let text;
    id = this.id
    text = passBox[id - 1].textContent

    if(text !== "") {
       navigator.clipboard.writeText(text)
       notifyUser() 
    } else {
        return
    }
}

function notifyUser() {
    copyText.classList.add('fine')
    let temp = setInterval( () =>{
        copyText.classList.remove('fine')
        clearInterval(temp)
    }, 5000)
}

function fieldClear(){
    passBox.forEach(item => {
        item.textContent = ''        
    });
}