import Express from 'express'

const app = Express();

app.post('/hello', (req, res) =>{
    res.send('hello this is my first express app');
})

app.get('/hello/:name/:age', (req, res) =>{
    const name = req.params.name
    const age = req.params.age
    res.send({
        name: name,
        age: age
    });
})





app.listen(3000, () =>{
    console.log(`Server running on port 3000`);
})