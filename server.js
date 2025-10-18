import express from "express";
import axios from "axios";
import cors from "cors"

const app = express() 

app.use(cors())

app.get("/me", async (req, res) => {
    try {
        const response = await axios.get("https://catfact.ninja/fact", {timeout: 5000})

        const catFact = response.data.fact;

        const result = {
            status: "success",
            user: {
                email: "preciousefeizomorprime@gmail.com",
                name: "Precious Efeizomor",
                stack: "Node.js/Express"
            },
            timestamp: new Date().toISOString(),
            fact: catFact
        }

        res.status(200).json(result)
    } catch (error) {
        console.error("Error fetching cat fact:", error.message)
        res.status(500).json({
            status: "error",
            message: "Could not fetch cat fact. Please try again later.",
            timestamp: new Date().toISOString()
        })
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/me`)
})