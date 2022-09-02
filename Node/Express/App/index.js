const express = require("express")
const app = express()

// app.use((req, res) => {
//     console.log('NEW REQUEST')
//     // res.send('WE HAVE YOU REQUEST')
//     // res.send({color: 'red'})
//     res.send('<h1>This is my web page</h1>')
// })

app.get('/', (req, res) => {
    res.send('THIS IS THE HOME PAGE!!!!!!')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Vieing post Id ${postId} on the ${subreddit} subreddit</h1>`)
})


app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats')
})

app.get('/cats', (req, res) => {
    res.send('MEOW')
})

app.get('/dogs', (req, res) => {
    res.send('WOOOOFFF')
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED')
    }
    res.send(`<h1>Search Result for: ${q} </h1>`)
})

// CATCH ALL
// ('*') {* = EVERYTHING} 
// to be AT THE END otherwise
// no other req will be fulfilled!!
app.get('*', (req, res) => {
    res.send('NO IDEA WHAT YOU TALKING ABOUT!!')
})




app.listen(3000, () => {
    console.log('LISTENING TO PORT 3000!')
})