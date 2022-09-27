const e = require('express')
const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')
const Task = require('./models/task')

const app = express()
const sequelize = new Sequelize({ dialect: 'sqlite', storage: './task-list.db' })
const tasks = Task(sequelize, DataTypes)

// We need to parse JSON coming from requests
app.use(express.json())

// List tasks
app.get('/toti-nodejs-exercicio-2020/:id', (req, res) => {

    const taskId = req.params.id

    res.json({ action: 'Listar tarefa' })
});

// Create task
app.post('/tasks', (req, res) => {
    const { name, repository, author, homepage, devDependencies } = req.body;
    const task = { name, repository, author, homepage, devDependencies };
    tasks.push(task);
    return res.status(201).json(task);
});

// Show task
app.get('/tasks/:id', (req, res) => {
    const taskId = req.params.id

    res.send({ action: 'Criar tarefas', taskId: taskId })
});

// Update task
app.put('/tasks/:id', (req, res) => {
    const taskId = req.params.id

    res.send({ action: 'Atualizando tarefa', taskId: taskId })
});

// Delete task
app.delete('/tasks/:id', (req, res) => {
    const taskId = req.params.id

    res.send({ action: 'Deletar tarefa', taskId: taskId })
});

app.listen(3000, () => {
    console.log('Iniciando o ExpressJS na porta 3000')
});