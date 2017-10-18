const router = require('express').Router()
const db = require('../../db');

router.get('/student', (req, res, next) => {
	db.models.student.findAll()
	.then(students => {
	res.json(students)
	})
	.catch(next)
})

router.get('/student', (req, res, next) => {
	db.models.student.findAll()
	.then(students => {
	res.json(students)
	})
	.catch(next)
})

router.get('/student/:id', (req, res, next) => {
	db.models.student.findById((req.params.id))
	.then(student => {
		res.json(student)
	})
	.catch(next)
})

router.post('/student', (req, res, next) => {
	db.models.student.create(req.body)
	.then(newStudent => {res.status(201).json(newStudent)})
})

module.exports = router;
