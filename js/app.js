function getElementValue(elementId){
    const element = document.getElementById(elementId);
    const value = parseInt(element.innerText);
    return value;
}
function setValueInElement(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function enrollReact(){
    let currentNumber = getElementValue('react');
    const newNumber = currentNumber + 1;
    setValueInElement('react', newNumber);
}
function enrollPowerpoint(){
    let currentNumber = getElementValue('powerpoint');
    const newNumber = currentNumber + 1;
    setValueInElement('powerpoint', newNumber);
}
function enrollJavascript(){
    let currentNumber = getElementValue('javascript');
    const newNumber = currentNumber + 1;
    setValueInElement('javascript', newNumber);
}