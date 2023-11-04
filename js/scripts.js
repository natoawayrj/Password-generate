//seleção de elementos 
 
const genaretePasswordButton = document.getElementById("generate-password")

const genaretedButtonElement = document.getElementById("generated-password")


//novas funcionalidades

const openCloseGenerateButton = document.getElementById("open-generate-password")
const generatePasswordContainer = document.getElementById("generate-options")
const lengthInput = document.getElementById("length")
const lettersInput = document.getElementById("letters")
const numbersInput = document.getElementById("numbers")
const symbolsInput = document.getElementById("symbols")
const copyPasswordButton = document.getElementById("copy-password")

//funções 
const getLetterLowCAse = ()=>{
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getLetterUpperCAse = ()=>{ 
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }

  const getNumber = ()=>{ 
    return Math.floor(Math.random()* 10).toString()
  }
 
  const getSymbols = ()=>{
    const symbols = "!@#$%¨&*()?/.,<>[]}{ºª+=-_"
    return symbols[Math.floor(Math.random() * symbols.length)]
  } 

  const generatorPassword = (getLetterLowCAse, getLetterUpperCAse, getNumber, getSymbols)=>{
    let password = ""

    const passwordLength =+ lengthInput.value 
    const generator = []

    if(lettersInput.checked){
      generator.push(getLetterLowCAse,getLetterUpperCAse)
    }
    if(numbersInput.checked){
      generator.push(getNumber)
    }    
    if(symbolsInput.checked){
      generator.push(getSymbols)
    }    

    if(generator.length === 0){
      return;
    }

    

    for(i = 0; i < passwordLength; i = i + generator.length){
        generator.forEach(()=>{
            const randomValue = generator[Math.floor(Math.random()*generator.length)]()
            
            password += randomValue
        })
    }

    password = password.slice(0, passwordLength)
    genaretedButtonElement.style.display = "block"
    genaretedButtonElement.querySelector("h4").innerText = password
  }
  
//eventos

genaretePasswordButton.addEventListener("click",()=>{
    generatorPassword(getLetterLowCAse, getLetterUpperCAse, getNumber, getSymbols)
})


openCloseGenerateButton.addEventListener("click",()=>{
  generatePasswordContainer.classList.toggle("hide")
})

copyPasswordButton.addEventListener("click",(e)=>{

  e.preventDefault()

  const password = genaretedButtonElement.querySelector("h4").innerText

  navigator.clipboard.writeText(password).then(()=>{
    copyPasswordButton.innerText = "Senha copiada"

    setTimeout(()=>{
      copyPasswordButton.innerText = "copiar"
    } ,1000)
  })
})