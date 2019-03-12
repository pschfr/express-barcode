// Require dependencies
const express = require('express')
const handlebars = require('express-handlebars')

// Start app
const app = express()

// Sets port from environment variable
const port = process.env.PORT ? process.env.PORT : '8080'

// Enable handlebars
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
// app.use(express.static('static'))

// Set local variables
app.locals.title = 'Barcode Generator'
app.locals.source = 'https://github.com/pschfr/express-barcoded/'
app.locals.description = 'This website is a simple barcode generator, used for DPCIs, backroom locations, cart labels, or whatever you may need!'

// Render views
app.get('/', (req, res) => {
  console.log('rendering index')
  res.render('index', req.app.locals)
})

// Starts app on proper port
app.listen(port, () => console.log(`The app is now listening on port ${port}!`))

