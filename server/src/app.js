import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));


app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/api/health", (req, res) => {
    res.json({ message: "Server Is Healthy." });
});


app.get("/api/test-stress",(req, res) => {

    let sum = 0;

    for (let i = 0; i < 1e7; i++) {
        sum += i;
    }
    res.json({ message: "Stress Test Completed.", result: sum });
})



app.get("*not", (req, res) => {
    res.send("Path Not Found.")
})

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

export default app;