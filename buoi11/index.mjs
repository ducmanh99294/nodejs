import express from 'express'
import rootrouter from './routes/root.mjs'
import { connectDB } from "./config/connectDB.mjs";
import userRouter from './routes/user.mjs';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import bookingRouter from './routes/booking.mjs';
connectDB();
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);
app.use(bodyParser.json());

app.set("view engine","ejs");
app.set("views","./views");
app.use(express.static("public"));

app.use("/bookings", bookingRouter);
app.use("/users", userRouter);
app.use('/', rootrouter);

app.listen(port, ()=>{
  console.log(`Server starting on ${port}`)
})