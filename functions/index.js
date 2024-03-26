const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({origin: true }));

const {submitUserFeedback} = require("./callableFunctions/addFeedback");
exports.submitUserFeedback = submitUserFeedback;