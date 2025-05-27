import express from "express";
import cors from "cors";


const app = express()

app.use(express.json());
app.use(cors());

//connected to a port

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//made a root route

app.get("/", function (_,res) {
    res.json({message: "This is the root route."});
});

//made a post route 

app.get('/posts', async (req, res) => {
    try {
        const { rows } = await db.query(`SELECT * FROM dev_posts`);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Server is down :(' });
    }
});