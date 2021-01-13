const express = require("express");
const app = express(); // create express app
const path = require('path');
const port = process.env.PORT || 4000;

const reactBuildPath = path.join(__dirname + '/build/index.html')
app.use(express.static(path.join(__dirname, '/build')))

app.get('*', (_, res) => { res.sendFile(reactBuildPath); })

// start express server
app.listen(port, () => {
  console.log(`server started on port ${port}`);
})