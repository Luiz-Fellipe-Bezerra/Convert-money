const firstSelect = document.querySelector("#first-select")
const secondSelect = document.querySelector("#second-select")
const convertButton = document.querySelector("#convert-button")
const convertMain = document.querySelector(".principal")



function convertValue() {

    const valueInput = document.querySelector("#value").value
    const convertedCurrency = document.querySelector("#converted-currency")
    const currencyToConvert = document.querySelector("#currency-to-convert")

     // REAL 
    const valueDolar = 5.66
    const valueEuro = 6.14
    const valueLibra = 7.34
    // Dolar
    const valueEuroToUsd = 0.92
    const valueLibraToUsd = 0.77
    // Euro
    const valueLibraToEur = 0.84

    
    if (firstSelect.value === "Real" && secondSelect.value === "Real") {
    
        currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency:"BRL"
        }).format(valueInput)
        
        
        
        convertedCurrency.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency:"BRL"
        }).format(valueInput / 1)
        

    }
   

    else if (firstSelect.value === "Real" && secondSelect.value === "Dolar") {
    
        currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency:"BRL"
        }).format(valueInput)
        
        
        
        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency:"USD"
        }).format(valueInput / valueDolar)
        

    }

    else if (firstSelect.value === "Dolar" && secondSelect.value === "Real") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency:"USD"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency:"BRL"
        }).format(valueInput * valueDolar)
        
    }

    if (firstSelect.value === "Real" && secondSelect.value === "Euro") {
        
        currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency:"BRL"
        }).format(valueInput)

        
        
        convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency:"EUR"
        }).format(valueInput / valueEuro)

    }

    else if (firstSelect.value === "Euro" && secondSelect.value === "Real") {

        currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency:"EUR"
        }).format(valueInput)


        convertedCurrency.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency:"BRL"
        }).format(valueInput * valueEuro)
    }

    if (firstSelect.value === "Real" && secondSelect.value === "Libra") {
        
        currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency:"BRL"
        }).format(valueInput)

        
        
        convertedCurrency.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInput / valueLibra)

    }
    else if (firstSelect.value === "Libra" && secondSelect.value === "Real") {
        
        currencyToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency:"GBP"
        }).format(valueInput)

        
        
        convertedCurrency.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInput * valueLibra)

    }
    if (firstSelect.value === "Dolar" && secondSelect.value === "Euro") {
        
        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency:"USD"
        }).format(valueInput)

        
        
        convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInput * valueEuroToUsd)

    }
    else if (firstSelect.value === "Euro" && secondSelect.value === "Dolar") {
        
        currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency:"EUR"
        }).format(valueInput)

        
        
        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInput / valueEuroToUsd)

    }
    if (firstSelect.value === "Dolar" && secondSelect.value === "Libra") {
        
        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency:"USD"
        }).format(valueInput)

        
        
        convertedCurrency.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInput * valueLibraToUsd)

    }
    else if (firstSelect.value === "Libra" && secondSelect.value === "Dolar") {
        
        currencyToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency:"GBP"
        }).format(valueInput)

        
        
        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInput / valueLibraToUsd)

    }
    if (firstSelect.value === "Euro" && secondSelect.value === "Libra") {
        
        currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency:"EUR"
        }).format(valueInput)

        
        
        convertedCurrency.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInput * valueLibraToEur)

    }
    else if (firstSelect.value === "Libra" && secondSelect.value === "Euro") {
        
        currencyToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
            currency: "GBP"
        }).format(valueInput)

        convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency:"EUR"
        }).format(valueInput / valueLibraToEur)


    }
}
function changeValues() {

    const firstImage = document.querySelector(".first-image")
    const secondImage = document.querySelector(".second-image")
    const paragraphToConvert = document.querySelector(".paragraph-to-convert")
    const valueToConvert = document.querySelector("#currency-to-convert")
    const convertedParagraph = document.querySelector(".converted-paragraph")
    const convertedValue = document.querySelector("#converted-currency")

    
    
        if (firstSelect.value === "Real") {
            firstImage.src = "./assets/brasil-2.png"
            paragraphToConvert.innerHTML = "R$ Real"
            valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style:"currency",
                currency:"BRL"
            }) .format(0)
        }

        else if (firstSelect.value === "Dolar") {
            firstImage.src = "./assets/estados-unidos-1.png"
            paragraphToConvert.innerHTML = "$ Dólar"
            valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style:"currency",
                currency:"USD"
            }) .format(0)
            
        }

        else if (firstSelect.value === "Euro") {
            firstImage.src = "./assets/Design-sem-nome-3.png"
            paragraphToConvert.innerHTML = "€ Euro"
            valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style:"currency",
                currency:"EUR"
            }) .format(0)
            
        }

         else if (firstSelect.value === "Libra") {
             firstImage.src = "./assets/unitedkingdom.png"
             paragraphToConvert.innerHTML = "£ Libra"
             valueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
                 style:"currency",
                 currency:"GBP"
             }) .format(0)
            
         }

         if (secondSelect.value === "Real") {
             secondImage.src = "./assets/brasil-2.png"
             convertedParagraph.innerHTML = "R$ Real"
             convertedValue.innerHTML = new Intl.NumberFormat("pt-BR", {
                 style:"currency",
                 currency:"BRL"
             }) .format(0)
         }
        
         else if (secondSelect.value === "Dolar") {
             secondImage.src = "./assets/estados-unidos-1.png"
             convertedParagraph.innerHTML = "$ Dólar"
             convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
                 style:"currency",
                 currency:"USD"
             }) .format(0)
         }

         else if (secondSelect.value === "Euro") {
             secondImage.src = "./assets/Design-sem-nome-3.png"
             convertedParagraph.innerHTML = "€ Euro"
             convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
                 style:"currency",
                 currency:"EUR"
             }) .format(0)
         }

         else if (secondSelect.value === "Libra") {
             secondImage.src = "./assets/unitedkingdom.png"
             convertedParagraph.innerHTML = "£ Libra"
             convertedValue.innerHTML = new Intl.NumberFormat("en-GB", {
                 style:"currency",
                 currency:"GBP"
             }) .format(0)
         }
        
    convertValue()
}


firstSelect.addEventListener("change", changeValues)
secondSelect.addEventListener("change", changeValues)
convertButton.addEventListener("click", convertValue)

    
    


