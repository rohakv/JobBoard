const express = require("express");
const app = express();
const cors = require("cors");

// routers
const postRouter = require("./routers/post.js");

// middleware
app.use(cors({
    "origin": "*",
}));

app.get("/", (req, res) => {
    res.send("Home page");
});

app.use("/post", postRouter);

app.listen(4000, () => {
    console.log("🚀 Server running port 4000");
});