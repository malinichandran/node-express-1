const express = require('express');
const ExpressError = require('./expressError')
let axios = require('axios');
var app = express();

app.use(express.json());

app.post('/', async function(req, res, next) {
  try {
    let out = []
    let arr = req.body.developers;
    for(let n of arr){
      let res = await axios.get(`https://api.github.com/users/${n}`)
      let resObj = {name : res.data.name, bio: res.data.bio}
      out.push(resObj)
    }
    // let results = req.body.developers.map(async(d)  => {
    //   return await axios.get(`https://api.github.com/users/${d}`);
    // });
    // let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.send(out);
  }
  catch(err) {
    next(err);
  }
});

app.use((req, res, next)=>{
  const notFoundError = new ExpressError("Name not found", 404);
  return next(notFoundError)
})

app.use((err, req, res, next)=>{
  let status = err.status || 500;
  let message = err.message;
  return res.status(status).json({
    error: {message, status}
  });
});

app.listen(3000);
