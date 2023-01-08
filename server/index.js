const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname))

app.use('/public', express.static(path.join(__dirname, '../public')))
app.use('/src', express.static(path.join(__dirname, '../src')))

app.listen('8080', function () {
  console.log('listening on http://localhost:8080')
})
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})
app.post('/pushlist', (req, res) => {
  res.status(200).send({
    message: 'post successfully',
  })
  const reqList = JSON.stringify(req.body.list)
  const makefolder = (dir) => {
    if (!fs.existsSync(path.join(__dirname, `../${dir}`))) {
      fs.mkdirSync(path.join(__dirname, `../${dir}`))
    }
  }
  makefolder('/dist')
  const tplJs = fs.readFileSync(
    path.join(__dirname, '../tpl/index.json'),
    'utf-8',
  )

  fs.writeFileSync(
    req.body.fileName
      ? path.join(__dirname, `../dist/${req.body.fileName}.json`)
      : path.join(__dirname, `../dist/file.json`),
    tplJs.replace('####contentsList####', reqList),
    () => {
      console.log('완료')
    },
  )
})
