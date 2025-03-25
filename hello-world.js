const nameInput = document.getElementById('name');
const messageP = document.getElementById('message');
const limparButton = document.getElementById('limpar');

const limpar = () => {
    nameInput.value = '';
    messageP.innerText = '';
}

limparButton.addEventListener('click', limpar);

nameInput.onkeyup = (event) => {

    if (event.code === 'Enter') {
        helloWorld();
    }

    if (event.code === 'Backquote') {
        limpar();
    }

    if (nameInput.value === '') {
        messageP.innerText = '';
    }
}
const helloWorld = () => {
    messageP.innerText = `Hello World, ${nameInput.value}!`;
}