const path = require('path')
const express = require('express')

const server = express()

// const devRoutes = require('./routes/dev')
// const employerRoutes = require('./routes/employer')
// const authRoutes = require('./routes/auth')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server

// server.use('/api/v1/dev', devRoutes)
// server.use('/api/v1/employer', employerRoutes)
// for when we add authentication:
// server.use('/api/v1', authRoutes)
