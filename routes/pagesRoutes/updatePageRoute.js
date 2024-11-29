const express = require ('express');
const router = express.Router();
const {readFile} = require('fs');


router.get("/update/:id", (req, res)=>{
    const update = new Promise((resolve, rejects)=>{
        readFile('./public/views/update.html', 'utf-8', (err, data)=>{
            if(err) rejects (err);
            resolve(data)
        })
})
const footer = new Promise((resolve, rejects)=>{
    readFile('./public/components/footer.html', 'utf-8', (err, data)=>{
        if(err) rejects (err);
        resolve(data);
    })
})

Promise.allSettled([update, footer]).then(values =>{
    res.setHeader('Content-type','text/html');
    res.status(200).send(values[0].value+values[1].value);
})

})

module.exports = router;