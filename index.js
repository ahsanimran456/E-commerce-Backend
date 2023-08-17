import express from "express";
import router from "./Routes/Routes";
import cors from "cors"

const app = express();
const port = 3000;


// app.use(cors({
//     origin: ["http://localhost:3001", "*"],
//     credentials: true
// }));
app.use(cors({
    origin: ["http://localhost:3001", "*"],
    credentials: true
}))
app.use("/", router)
app.use("/", (req, res) => {
    res.send(new Date());
});

app.listen(port, () => {
    console.log(`server is running on port!${port}`);
});
