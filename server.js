import express from "express";
import axios from "axios";
import cors from "cors";


const app = express();
app.use(cors());

app.get("/me", async (req, res) => {
  try {
    // Fetch cat fact dynamically
    const { data } = await axios.get("https://catfact.ninja/fact", { timeout: 5000 });

    const response = {
      status: "success",
      user: {
        email: "nnaemekauzuegbu59@gmail.com",
        name: "Nnaemeka Uzuegbu",
        stack: "Node.js/Express"
      },
      timestamp: new Date().toISOString(),
      fact: data.fact
    };

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(response);

  } catch (error) {
    console.error("Cat Fact API error:", error.message);
    res.status(200).json({
      status: "success",
      user: {
        email: "nnaemekauzuegbu59@gmail.com",
        name: "Nnaemeka Uzuegbu",
        stack: "Node.js/Express"
      },
      timestamp: new Date().toISOString(),
      fact: "Could not fetch cat fact at the moment 🐾"
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
