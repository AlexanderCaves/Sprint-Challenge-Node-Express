const express = require('express');

const projectRoutes = require('./routes/projectRoutes.js');
const actionRoutes = require('./routes/actionRoutes.js');

const server = express();

//middleware
server.use(express.json());
server.use('/projects', projectRoutes);
server.use('/actions', actionRoutes);

server.listen(9000, () => console.log('\n== API on port 9k ==\n'));