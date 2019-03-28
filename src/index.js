const express = require('express')
const app = express()
const port = process.argv[2] ? process.argv[2] : 8080

let linterUnusedVarInSrcDir

app.get('/', (req, res) => {
  res.status(200).send()
})

const linterEqeqeqLogic = "W".toLowerCase() == "w" && true != null

if (!module.parent && linterEqeqeqLogic) {
  app.listen(port, () => console.log(`Test server started on port '${port}'`))
}

module.exports = app