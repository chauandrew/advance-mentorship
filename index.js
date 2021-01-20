const express = require("express");
const cors = require('cors')
const path = require('path');
const port = process.env.PORT || 4000;

const app = express(); // create express app
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.set('port', port);

const reactBuildPath = path.join(__dirname + '/client/build/index.html')

// Static React Routing
app.use(express.static(path.join(__dirname, '/client/build')))
app.get('/', (_, res) => { res.sendFile(reactBuildPath); })
app.get('/campuses', (_, res) => { res.sendFile(reactBuildPath); })
app.get('/advisors', (_, res) => { res.sendFile(reactBuildPath); })
app.get('/advisors/*', (_, res) => { res.sendFile(reactBuildPath); })
app.get('/mentors', (_, res) => { res.sendFile(reactBuildPath); })
app.get('/mentors/*', (_, res) => { res.sendFile(reactBuildPath); })
app.get('/program', (_, res) => { res.sendFile(reactBuildPath); })
app.get('/apply', (_, res) => { res.sendFile(reactBuildPath); })
app.get('/terms-of-use', (_, res) => { res.sendFile(reactBuildPath); })
app.get('/privacy', (_, res) => { res.sendFile(reactBuildPath); })
app.get('/code-of-conduct', (_, res) => { res.sendFile(reactBuildPath); })

// Backend calls under /server/routes/index
const routes = require('./server/api/index');
app.use("/", routes)

// start express server
app.listen(port, () => {
  console.log(`server started on port ${port}`);
})