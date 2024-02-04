//2. Add JS code to display your full name inside h1 element and 
//add the following style (align center and color gray or #A9A9A9)

//5. Add JS code to style your page

let h1Ele = document.createElement('h1')
h1Ele.innerText = 'Marianna Rangel Antunes'
let bodyEle = document.getElementsByTagName('body')[0]
bodyEle.appendChild(h1Ele)
h1Ele.style.textAlign = 'center'
h1Ele.style.color = 'gray'
h1Ele.style.backgroundColor = 'yellow'
h1Ele.style.padding = "1%"
h1Ele.style.margin = '0'
bodyEle.style.backgroundColor = "gray"
bodyEle.style.display = "grid"
bodyEle.style.gridTemplateColumns = 'auto auto'
bodyEle.style.gridTemplateRows = 'auto auto auto auto'
bodyEle.style.gap = '3% 0.2%'
h1Ele.style.gridArea = '1 / 1 / 2 / 3'

//3. Add JS code to append two input elements and one button, 
//when click the button, the sum of these two numbers will show on the page

//4. Add JS code to create an arrow function to validate the value of two input boxes (use try catch). 
//Only the number is validated. If input is not number, show the error message on the page (DO NOT USE ALERT)
//and set the input box with red border

let inputEle1 = document.createElement('input')
let inputEle2 = document.createElement('input')
let buttonEle = document.createElement('button')
let resultEle = document.createElement('p')
buttonEle.innerText = 'SUM'
resultEle.innerText = ""
inputEle1.setAttribute('placeholder', 'Enter 1st Number')
inputEle2.setAttribute('placeholder', 'Enter 2nd Number')


inputEle1.style.gridArea = '2 / 1 / 3 / 2'
inputEle2.style.gridArea = '2 / 2 / 3 / 3'
buttonEle.style.gridArea = '3 / 1 / 4 / 3'
resultEle.style.gridArea = '4 / 1 / 5 / 3'

inputEle1.style.marginLeft = '80%'
inputEle1.style.padding = '1%'
inputEle1.style.textAlign = 'center'
inputEle2.style.marginRight = '80%'
inputEle2.style.padding = '1%'
inputEle2.style.textAlign = 'center'
buttonEle.style.padding = '0.5% 1%'
buttonEle.style.marginLeft = '40%'
buttonEle.style.marginRight = '40%'
buttonEle.style.border = 'solid yellow'
resultEle.style.textAlign = 'center'
resultEle.style.marginLeft = '40%'
resultEle.style.marginRight = '40%'


bodyEle.appendChild(inputEle1)
bodyEle.appendChild(inputEle2)
bodyEle.appendChild(buttonEle)
bodyEle.appendChild(resultEle)

buttonEle.addEventListener('click', ()=>{
    let input1 = ""
    let input2 = ""
    input1 = inputEle1.value
    input2 = inputEle2.value
    try{
        if (isNaN(input1) && isNaN(input2) || input1 == "" && input2 == "" || isNaN(input1) && input2 == "" || input1 == "" && isNaN(input2)) 
        {
            inputEle1.style.border = 'solid red'
            inputEle2.style.border = 'solid red'
            throw "Both inputs are not numbers"
        }
        else if (isNaN(input1) || input1 == "")
        {
            inputEle1.style.border = 'solid red'
            inputEle2.style.border = 'none'
            throw "The 1st input is not a number"
        }
        else if (isNaN(input2) || input2 == "")
        {
            inputEle2.style.border = 'solid red'
            inputEle1.style.border = 'none'
            throw "The 2nd input is not a number"
        }
        else
        {
            resultEle.style.backgroundColor = 'gray'
            resultEle.style.color = 'yellow'
            resultEle.style.fontSize = '80px'
            resultEle.style.fontWeight = 'bold'
            inputEle1.style.border = 'none'
            inputEle2.style.border = 'none'
            resultEle.innerText = input1 + " + " + input2 + " = " + (parseFloat(input1) + parseFloat(input2))
        }
    }
    catch(err){
        resultEle.style.backgroundColor = 'black'
        resultEle.style.color = 'red'
        resultEle.style.fontWeight = 'bold'
        resultEle.style.fontSize = '20px'
        resultEle.innerText = 'Error: ' + err
    }

})