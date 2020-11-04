<<<<<<< HEAD
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
=======
import mongoose from "mongoose"
export default mongoose.connect("mongodb://localhost/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch(e => console.log(e))
>>>>>>> master
