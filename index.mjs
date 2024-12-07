import express from 'express'
import { connectDB } from './config/connectdb.mjs'
import userRouter from './routes/userRouter.mjs';
import serviceRouter from './routes/serviceRouter.mjs';
import reservationRouter from './routes/reservationRouter.mjs';
import bodyParser from 'body-parser';
import session from 'express-session';

connectDB();
const app = express()
const port = 3000

// app.use(
//   session({
//     secret: "keyboard", //private
//     resave: false,
//     saveUninitialized: true
//   }))
// app.use(bodyParser.json());

app.set("view engine","ejs");
app.set("views","./views");
app.use(express.static("public"));

app.use('/user', userRouter);
app.use('/service', serviceRouter);
app.use('/reservation', reservationRouter);

app.listen(port, ()=>{
  console.log(`Server starting on ${port}`)
})