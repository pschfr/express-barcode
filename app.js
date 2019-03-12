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

// Data to render in index view. Currently hard-coded,
// may want to replace with data in a JSON file or a DB.
const data = {
  'title': 'Barcode Generator',
  'source': 'https://github.com/pschfr/express-barcoded/',
  'description': 'This website is a simple barcode generator, used for DPCIs, backroom locations, cart labels, or whatever you may need!  ',
}

// Render views
app.get('/', (req, res) => {
  console.log('rendering index')
  res.render('index', data)
})

// Starts app on proper port
app.listen(port, () => console.log(`The app is now listening on port ${port}!`))

