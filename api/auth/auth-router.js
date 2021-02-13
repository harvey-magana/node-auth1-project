const router = require('express').Router();

const Users = require('../users/users-model.js');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    
    try {
        const saveUser = await Users.add(user);
        res.status(201).json(saveUser);
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'error registering user', error: err
        })
    }
});

router.post('/login', async (req, res) => {
    let { username, password } = req.body;

    try {
        const user = await Users.findBy({ username }).first();

        if(user && bcrypt.compareSync(password, user.password)) {
            req.session.user = user;
            res.status(200).json({ message: `welcome, ${user.username}` })
        } else {
            res.status(401).json({ message: 'Invalid credentials'})
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({
            message: 'error getting user logged in', error: err
        })
    }
})

router.post('/logout', (req, res) => {
    
}) 

module.exports = router;