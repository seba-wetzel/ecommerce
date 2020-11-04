const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
