import { createRequire } from "module";
import Bai3Controller from "../controllers/Bai3_controller.mjs";

const require = createRequire(import.meta.url);
const express = require('express');
const rootrouter = express.Router();
rootrouter.get('/bai3',Bai3Controller.detail);


export default rootrouter