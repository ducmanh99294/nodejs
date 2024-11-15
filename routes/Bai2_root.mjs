import { createRequire } from "module";
import Bai2Controller from "../controllers/Bai2_controller.mjs";

const require = createRequire(import.meta.url);
const express = require('express');
const rootrouter2 = express.Router();
rootrouter2.get('/bai2',Bai2Controller.detail);


export default rootrouter2