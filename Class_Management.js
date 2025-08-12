const express = require("express")
const app = express()
const PORT = 3000

app.use(express.json());


let users = [
    {
        id: 1, 
        firstName:`Vince`,
        lastName:`Lagrimas`,
        section: `BSIT-4B`,
        status: `absent`
    },
    {
        id: 2, 
        firstName:`Vince`,
        lastName:`Lagrimas`,
        section: `BSIT-4B`,
        status: `absent`

    }

]



app.get(`/user`, (req, res) => {
    const {firstName, lastName, section, status} = res.body;
    const userIndex = users.findIndex(user=> user.firstName === firstName && user.lastName === lastName);


    if (userIndex !== -1) {
        user[userIndex].status = status;
        console.log(`update attendance for ${lastName} ${firstName} to: ${status} `);
        res.status(200).json({message : `Attendance for ${lastName} ${firstName} has been updated to  $ {status}`})

    }

    else{
        const newUser ={
            id:users.length + 1,
            lastName,
            firstName,
            section,
            status
        };

        user.push(newUser);
        console.log(`New user Added ${lastName} ${firstName} to: ${status} `);
        res.status(201).json({message : `New Student ${lastName} ${firstName} has been added with   $ {status}`})


}});


app.get(`/users`, (req, res) => {
    res.status(200).json(users);
});

app.get(`/`,(req, res) => {
    res.send(`Server is up and Running`);
})  ;

module.exports = app;


app.listen(PORT, () => {
    console.log(`Running on  http:localhost:${PORT}`)
});

