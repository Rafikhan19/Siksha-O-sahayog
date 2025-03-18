const express = require("express");
const app = express();


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running on port 4000");
});


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
