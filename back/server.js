import express from "express";



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('../front/build/'));

app.use(function (err, req, res, next) {
    console.error(err, err.stack);
    res.status(500).send(err);
});

app.get("/mmmmmmmmmm", (req, res) => {
    console.log("sfdsfsdfgfds")
    res.send("hola")
})

app.listen(8000, () => {
    console.log(`Server listening at port 8000`);
});