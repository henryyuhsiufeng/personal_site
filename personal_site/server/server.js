const express = require('express');
//tell application we are using express for routing
const app = express();

//GET Landing page
app.get('/ex', (req, res) => {
    const check = [
        {id:1, firstName: 'Buck', lastName: 'buf'},
        {id:2, firstName: 'asdf', lastName: 'asdfasdf'},
        {id:3, firstName: 'Buttface', lastName: 'asdf'}
    ];

    //Sends a JSON response. 
    res.json(check);
});

//set to 5000 to not conflict with default create react app
const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));