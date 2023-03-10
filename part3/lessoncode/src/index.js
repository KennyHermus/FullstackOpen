const express = require('express')
const app = express()

// OOTB middleware to parse raw data from requests and convert it to a JS object
app.use(express.json())

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        important: true
      },
      {
        id: 2,
        content: "Browser can execute only JavaScript",
        important: false
      },
      {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        important: true
      }
]

// custom middleware to log requests
const requestLogger = (request, response, next) => {
    console.log('Method: ', request.method)
    console.log('Path:   ', request.path)
    console.log('Body:   ', request.body)
    console.log('---')
    next()
}

// order of middleware use matters (using express.json is what initializes response.body which is used in requestLogger)
app.use(requestLogger)

// main page
app.get('/', (request, response) => {
    response.send('<h1>Hello World<h1>')
})

// get all notes
app.get('/api/notes', (request, response) => {
    response.json(notes)
})

// get singular note
app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    if (note)
        response.json(note)
    else
        response.status(404).end()
})

// delete note
app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()
})

const generateID = () => {
    const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0
    return maxId + 1
}

// add note
app.post('/api/notes', (request, response) => {
    const body = request.body
    if (!body.content)
        return response.status(400).json({error: 'content missing'})
    
    const note = {
        content: body.content,
        important: body.important || false,
        id: generateID()
    }

    notes = notes.concat(note)
    response.json(note)
})

// middleware must be defined before the routes if we want them to be executed before the route event handlers are called
// middleware after the routes are used only if no routes handle the HTTP request e.g., if request made to non-existent route
const unknownEndpoint = (request, response) => {
    response.status(404).send({error: 'unknown endpoint'})
}

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`);