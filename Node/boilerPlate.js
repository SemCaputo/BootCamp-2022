// // const fs = require('fs');
// // console.log(fs)

// // fs.mkdir('Dogs', { recursive: true }, (err) => {
// //     console.log('BEFORE')
// //     if (err) throw err;
// // });
// // console.log('AFTER')
// // Synchronous version

// // fs.mkdirSync('CATS');
// // console.log('AFTER')
// // Asynchronous version

const fs = require('fs');
const folderName = process.argv[2] || 'Project'

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '')
    fs.writeFileSync(`${folderName}/style.css`, '')
    fs.writeFileSync(`${folderName}/app.js`, '')
} catch (e) {
    console.log('SOMETHING WENT WRONG!!');
    console.log(e);
}

