let text = document.querySelectorAll('p')

let val = "AdditionalText"
text.forEach(element => {
    element.innerText += val
});