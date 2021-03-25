const router = require('express').Router();
const { Coach } = require('../../models');

//===== GET all coaches =====//
router.get('/', (req, res) => {
    Coach.findAll({
        attributes: {
            exclude: ['password']
        }
    })
    .then(dbCoachData => res.json(dbCoachData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//===== GET single coach by id =====//
router.get('/:id', (req, res) =>{
    Coach.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbCoachData => {
        if (!dbCoachData) {
            res.status(404).json({ message: 'No coach with that id was found!'});
            return;
        }
        res.json(dbCoachData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

//===== CREATE COACH =====//
router.post('/', (req, res) => {
    Coach.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        skills: req.body.skills,
        password: req.body.password
    })
    .then(dbCoachData => res.json(dbCoachData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//===== UPDATE COACH =====//
router.put('/:id', (req, res) => {
    Coach.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbCoachData => {
        if (!dbCoachData[0]) {
            res.status(404).json({ message: 'No Coach matching that id was found'});
            return;
        }
        res.json(dbCoachData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//===== DELETE COACH =====//
router.delete('/:id', (req, res) => {
    Coach.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCoachData => {
        if(!dbCoachData) {
            res.status(404).json({ message: 'No Coach matching that id was found'});
            return;
        }
        res.json(dbCoachData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//======== LOGIN ROUTE ========//
router.post('/login', (req, res) => {
    Coach.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(dbCoachData => {
        if (!dbCoachData) {
            res.status(400).json({ message: 'User with email address not found!'});
            return;
        }

        const validPassword = dbCoachData.checkPassword(req.body.password);
        
        if(!validPassword) {
            res.status(400).json({ message: 'Incorrect password' });
            return;
        }

        res.json({ coach: dbCoachData, message: 'Login successful!' });
    })
});

module.exports = router;