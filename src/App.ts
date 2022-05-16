import express from "express";

const app = express();

app.use(express.json()); 

app.get("/",(_ , res ) => {
    return res.send("Hello world")
});

app.post("/api/data", (req,res) => {
    console.log(req.body )
    return res.sendStatus(200)
})

app.listen(3000, () => {
    console.log("Application listening on port 3000")
})