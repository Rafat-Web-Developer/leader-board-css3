function enrollReact(){
    const reactField = document.getElementById('react');
    let currentNumber = parseInt(reactField.innerText);
    const newNumber = currentNumber + 1;
    reactField.innerText = newNumber;
}