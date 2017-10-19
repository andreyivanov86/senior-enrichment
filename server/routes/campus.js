const router = require('express').Router()
const db = require('../../db');

router.get('/campus', (req, res, next) => {
	db.models.campus.findAll()
	.then(campus => {
		res.json(campus)
	})
	.catch(next)
});

router.get('/campus/:id', (req, res, next) => {
	db.models.campus.findById(req.params.id)
	.then(campus => res.json(campus))
	.catch(next)
});

router.post('/campus', (req, res, next) => {
	db.models.campus.create(req.body)
	.then(newCampus => res.status(201).json(newCampus))
	.catch(next)
})

module.exports = router;
