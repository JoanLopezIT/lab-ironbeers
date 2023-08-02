const express = require('express');

const hbs = require('hbs');
const path = require('path');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:
// app.get("/", (request, response)=> res.render("home"))
// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/beers', (req, res) => {

  fetch('https://api.punkapi.com/v2/beers')
    .then((element)=>{
        return element.json()
      })
    .then((data) =>{
      res.render('beers',{data})
    });
  })
    
app.get('/random-beers', (req, res) => {
  fetch('https://api.punkapi.com/v2/beers/random')
    .then((element)=>{
        return element.json()
      })
    .then((data) =>{
      res.render('random-beers',{data})
    });
});


app.listen(3000, () => console.log('🏃‍ on port 3000'));








// for(i=0, i<data.length,i++){
//   element = data[i]
//   arr = arr(element)
// }