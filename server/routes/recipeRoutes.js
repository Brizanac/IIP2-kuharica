const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

/**
 * App Routes 
*/
router.get('/', recipeController.homepage);
router.get('/recipe/:id', recipeController.exploreRecipe );
router.get('/categories', recipeController.exploreCategories);
router.get('/categories/:id', recipeController.exploreCategoriesById);
router.post('/search', recipeController.searchRecipe);
router.get('/explore-latest', recipeController.exploreLatest);
router.get('/explore-random', recipeController.exploreRandom);
router.get('/submit-recipe', recipeController.submitRecipe);
router.post('/submit-recipe', recipeController.submitRecipeOnPost);
router.get("/lively-puce-outerwear.cyclic.app/spoonacular/", recipeController.getAllRecipes, (req, res) => {
    res.render("spoonacular", { recipes: req.recipes });
});
router.get("/ingredients", (req, res) => {
    res.render("ingredients");
  });
  
  router.get("/results", recipeController.getResults);
  
  router.get("/recipesByIngredients", recipeController.getRecipesByIngredients);
  
module.exports = router;
