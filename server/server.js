const app = require("express")();
require('dotenv').config();
const FileSystemRouter = require("./routes/file-system/file-system.js");
const cors = require('cors')
const port = process.env.PORT;

app.use(cors());
app.get("/", (req, res) => res.send("<h1>Hello From Owen Library Server</h1>"));

app.use("/api/file-system", FileSystemRouter);

app.listen(port, () => console.log(`server running on port ${port}`));