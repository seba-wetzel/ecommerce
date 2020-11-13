import mongoose from "mongoose";
mongoose.set("useFindAndModify", false);

export default mongoose
  .connect("mongodb://localhost/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => console.log(e));
