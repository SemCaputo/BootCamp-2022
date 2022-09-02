const nums = [1, 5, 26, 2, 54, 8, 5, 63, 2, 5, 6, 5]
// Math.max(...nums)
console.log(...nums)

const nums1 = [1, 5, 26, 2, 54, 8, 5, 63, 2, 5, 6, 5]
// Math.max(...nums)
console.log(nums)

// console.log('hello')
// console.log(...'hello')
// console.log('h', 'e', 'l', 'l', 'o')

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];
const allPets = [...cats, ...dogs]

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const catDog = { ...feline, ...canine }
// canine WINS because it comes 2nd(LAST) and overrides the family


// Useful for adding data into an objest
const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

const newUser = { ...dataFromForm, id: 2345, isAdmin: false }