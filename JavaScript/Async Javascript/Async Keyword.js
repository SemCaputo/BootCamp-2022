// Promise created automatically by async functions
// THROW ERROR, if there's an error the promise is not fullfilled
// PROMISE rejected



// async function hello() {
// }



// const sing = async () => {
//     throw 'THIS IS A PROBLEM!!!'
//     return 'LA LA LA LA'
// }
// sing().then((data) => {
//     console.log('Promise resolved with:', data)
// })
//     .catch(err => {
//         console.log('REJECTED')
//         console.log(err)
//     })


// const login = async (username, password) => {
//     if (!username || !password) throw 'Missing Credentials'
//     if (password === 'Jeff') return 'Welcome!!'
//     throw 'Invalid Password'
// }

// login('ahsdkajjsgkdj', 'asdasfasfa')
//     // login('ahsdkajjsgkdj')
//     // login('ahsdkajjsgkdj', 'Jeff')
//     .then(msg => {
//         console.log('Logged In!!')
//         console.log(msg)
//     })
//     .catch(err => {
//         console.log('ERROR')
//         console.log(err)
//     })



const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))

async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return 'ALL DONE'
}
// rainbow().then(() => console.log('END OF RAINBOW'))

async function printRainbow() {
    await rainbow();
    console.log('END OF RAINBOW')
} printRainbow();



const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                reject('Connection Timeout')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        let data2 = await fakeRequest('/page2');
        console.log(data1);
    } catch (e) {
        console.log('CAUGHT AN ERROR', e)
        console.log('Error is:', e)
    }
}
