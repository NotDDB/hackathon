import express from "express";

const app = express();
const PORT = 1234;

app.listen(PORT, ()=>{
    console.log("Server listening on http://localhost:1234");
});

