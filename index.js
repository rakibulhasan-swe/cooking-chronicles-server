const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

// importing data
const chefData = require('./data/chef.json');
const recipeData = require('./data/recipe.json');

app.get("/", (req, res) => {
    res.send("Responding");
})

// chefs info
app.get("/chef", (req, res) => {
    res.send(chefData);
})

// recipe info by chefs id
app.get("/chef/:id", (req, res) => {
    const id = req.params.id;
    const recipeInfo = recipeData.filter((recipe) => recipe.chef_id == id);
    res.send(recipeInfo);
})


// server run checking
app.listen(port, () => {
    console.log(`Sever is running on ${port}`);
})

