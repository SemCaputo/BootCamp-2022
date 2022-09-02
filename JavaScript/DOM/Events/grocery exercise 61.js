const form = document.querySelector('form')

const list = document.querySelector('#list');

const inputOne = document.querySelector('#product');
const inputTwo = document.querySelector('#qty');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const product = inputOne.value;
    const newLiOne = document.createElement('li');
    newLiOne.innerText = product;
    list.append(newLiOne);

    const quantity = inputTwo.value;
    const newLiTwo = document.createElement('li');
    newLiTwo.innerText = quantity;
    list.append(newLiTwo);
})