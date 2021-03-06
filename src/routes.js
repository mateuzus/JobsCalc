const express = require('express');
//criação das rotas
const routes = express.Router()

const views = __dirname + '/views/'

const profile = {
    name: 'Mateus',
    avatar: 'https://github.com/mateuzus.png',
    "monthly-bugdet": 3000,
    "hours-per-day": 5,
    "days-per-week": 5,
    "vacation-per-year": 4
}

routes.get('/', (req, res) => res.render(views + 'index'))
routes.get('/job', (req, res) => res.render(views + 'job'))
routes.get('/job/edit', (req, res) => res.render(views + 'job-edit'))
routes.get('/profile', (req, res) => res.render(views + 'profile', { profile }))

module.exports = routes;