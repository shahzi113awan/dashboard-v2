const express = require("express");
const mongoose = require("mongoose");
let path = require("path");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();
const ci = require("./routes/api/CI");
const cti = require("./routes/api/CTI");
const cl = require("./routes/api/CL");
const kyc = require("./routes/api/KYC");
const kyb = require("./routes/api/KYB");
const appr = require("./routes/api/Approval");
const contact = require("./routes/api/contact");
const SolutionNav = require("./routes/api/solutioNavParams");
const solutionNavParam = require("./routes/api/solutioNav");
const sd = require("./routes/api/supportingDoc");
const uploadRoute = require("./routes/api/uploadRoutes");

const app = express();

app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;
const solutionNav = require("./models/solutionNav");

// Connect to DB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

// use routes
app.use("/api", ci);
app.use("/api", cti);
app.use("/api", cl);
app.use("/api", kyc);
app.use("/api", kyb);
app.use("/api", sd);
app.use("/api", appr);
app.use("/api", contact);
app.use("/api", uploadRoute);
app.use("/api", SolutionNav);
app.use("/api", solutionNavParam);

// const __dirname = path.resolve();
app.use("/get", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV == "Production") {
  app.use(express.static(path.join(__dirname, "build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "build", "index.html"))
  );
}
console.log(process.env.NODE_ENV);
console.log("NODE_ENV");
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`));
