'use strict'
const api = require('express').Router();
const db = require('../db');

// const models = require('../db/models')
// const Student = models.Student;
// const Campus = models.Campus;

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
//api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.get('/', (req, res, next) => {
	db.models.campus.findAll({include: [{all: true}]})
	.then(all => res.json(all))
	.catch(next)
})

api.get('/campus', (req, res, next) => {
	db.models.campus.findAll()
	.then(campus => {
		res.json(campus)
	})
	.catch(next)
});

api.get('/campus/:id', (req, res, next) => {
	db.models.campus.findById(req.params.id)
	.then(campus => res.json(campus))
	.catch(next)
});

api.post('/campus', (req, res, next) => {
	db.models.campus.create(req.body)
	.then(newCampus => res.status(201).json(newCampus))
	.catch(next)
})

api.get('/student', (req, res, next) => {
	db.models.student.findAll()
	.then(students => {
	res.json(students)
	})
	.catch(next)
})

api.get('/student/:id', (req, res, next) => {
	db.models.student.findById((req.params.id))
	.then(student => {
		res.json(student)
	})
	.catch(next)
})

api.post('/student', (req, res, next) => {
	db.models.student.create({name: 'Roman'})
	.then(newStudent => {res.status(201).json(newStudent)})
})


module.exports = api
