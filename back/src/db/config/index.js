import mongoose from "mongoose"
export default mongoose.connect("mongodb://localhost/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch(e => console.log(e))
