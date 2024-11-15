import systemInfo from './Bai1.js';
import express from 'express';
import rootrouter from './routes/Bai3_root.mjs';
import rootrouter2 from './routes/Bai2_root.mjs';
const app = express();
const port = 3000;

app.set("view engine","ejs");
app.set("views","./views");

app.use('/', rootrouter)
app.use('/', rootrouter2)
app.get('/bai1', (req, res) => {
    res.send(systemInfo)
})
// Khởi động server
app.listen(port, ()=>{
    console.log(`Server starting on ${port}`)
  })
