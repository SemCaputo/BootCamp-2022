const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

// const highScore = scores[0];
// const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;
// [] to indicate we are DESTRUCTURING from an array

// =====================================================

// DESTRUCTURING FROM OBJECT

const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;
// const { firstName } = user;
// const { lastName } = user;
// const { email } = user;
const { email, firstName, lastName, born,
    died, bio, city, state } = user;

const { born: birthYear } = user;
// extract the parameter from BORN into a new variable called birthYear


const user2 = {
    email2: 'Stacy@gmail.com',
    firstName2: 'Stacy',
    lastName2: 'Gonzalez',
    born2: 1987,
    city2: 'Tulsa',
    state2: 'Oklahoma'
}
const { email2, firstName2, lastName2, born2,
    died2 = 'N/A', city2, state2 } = user2;
// set to default 'N/A' if no value
// can set fallback value for each variable

// ===================
// PARAM DESTRUCTURING
// ===================

// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }
// function fullName(user) {
//     const { firstName, lastName } = user
//     return `${firstName} ${lastName}`
// }
function fullName({ firstName, LastNmae }) {
    return `${firstName} ${lastName}`
}





const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

// const bestMovies = movies.filter((movie) => movie.score >= 90)
const bestMovies = movies.filter(({ score }) => score >= 90);


// const movieInfo = movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })
const movieInfo = movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})