require('@babel/register')()

const express = require('express')
const app = express()

const render = require('./render').default

app.get('/', (req, res) => {
  res.send(`
    <!doctype html>
    <html lang="en">
      <head>
       <title>First App</title>
      </head>
      <body>
        <div id="root">${render()}</div>
      </body>
    </html>
  `);
})

app.listen(3000, () => console.log('Server is ready on 3000'))
