// Require dependencies
const dotenv = require('dotenv').config()
const express = require('express')
const handlebars = require('express-handlebars')

// Start app
const app = express()

// Sets port from environment variable
const port = process.env.PORT ? process.env.PORT : '8080'

// Enable handlebars
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.use(express.static('static'))

// Sets views/layout/default as default layout
app.locals.layout = 'default'

// Set local variables
app.locals.title = 'Barcode Generator'
app.locals.source = 'https://github.com/pschfr/express-barcode/'
app.locals.description = 'This website is a simple barcode generator, used for DPCIs, backroom locations, cart labels, or whatever you may need!'

// Passes through the environment variables
app.locals.team_member_number = process.env.TEAM_MEMBER_NUMBER
app.locals.team_member_password = process.env.TEAM_MEMBER_PASSWORD
app.locals.cart_label = process.env.CART_LABEL
app.locals.location = process.env.LOCATION

// Render views
app.get('/', (req, res) => {
  console.log(`rendering ${req.url}`)
  res.render('index', req.app.locals)
})

// Starts app on proper port
app.listen(port, () => console.log(`The app is now listening on http://localhost:${port}`))
