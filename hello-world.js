const nameInput = document.getElementById('name');
const messageP = document.getElementById('message');

nameInput.onkeyup = (event) => {
    if (nameInput.value === '') {
        messageP.innerText = '';
    }
}

const helloWorld = () => {
    messageP.innerText = `Hello World, ${nameInput.value}!`;
}