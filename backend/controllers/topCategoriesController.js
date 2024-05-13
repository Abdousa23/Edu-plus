const Category = require("../models/category");

const topCategories = async (req, res) => {
    try {
        const categories = {};
        const allCategories = await Category.find();

        allCategories.forEach((category) => {
            categories[category.name] = category.courses.length;
        });

        const topCategories = Object.keys(categories).sort((a, b) => categories[b] - categories[a]).slice(0, 5);
        
        const response = topCategories.map((categoryName) => ({
            name: categoryName,
            courseCount: categories[categoryName]
        }));

        res.status(200).json({ topCategories: response });
    } catch (error) {
        console.log("Error in the top categories controller:", error);
        res.status(500).json({ error: "An error occurred while calculating the top categories" });
    }
};

module.exports = topCategories;

