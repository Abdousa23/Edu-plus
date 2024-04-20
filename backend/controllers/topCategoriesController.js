const Category = require("../models/category")

const topCategories = async (req, res) => {
    try {
       const categories = {};
        const allCategories = await Category.find();
        allCategories.forEach((category) => {
            categories[category.name] = category.courses.length;
        });
        let topCategories = Object.keys(categories).sort((a, b) => categories[b] - categories[a]).slice(0, 5);
        res.status(200).json({ topCategories: topCategories });
    } catch (error) {
        console.log("error in the top categories controller");
        console.log(error);
        res.status(500).json({ error: "an error occurred while calculating the top categories" });
    }
}

module.exports = topCategories;



