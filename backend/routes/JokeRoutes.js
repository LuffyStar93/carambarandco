const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/JokeController');

// ****** GET ******

// Route pour obtenir toutes les blagues

/**
 * @swagger
 * api/jokes:
 *   get:
 *     summary: Retrieve a list of jokes
 *     description: Retrieve a list of jokes from the database.
 *     responses:
 *       200:
 *         description: A list of jokes.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   text:
 *                     type: string
 *                     example: "Quelle est la femelle du hamster ? L’Amsterdam"
*/
router.get('/jokes', jokeController.getAllJokes);

// Route spécifique pour obtenir une blague aléatoire
/**
 * @swagger
 * api/jokes/random:
 *   get:
 *     summary: Retrieve a random joke
 *     description: Retrieve a random joke from the database.
 *     responses:
 *       200:
 *         description: A random joke.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 text:
 *                   type: string
 *                   example: "Quelle est la femelle du hamster ? L’Amsterdam"
 *       404:
 *         description: No jokes available.
*/
router.get('/jokes/random', jokeController.getRandomJoke);

// Route pour obtenir une blague par ID

/**
 * @swagger
 * api/jokes/{id}:
 *   get:
 *     summary: Retrieve a single joke by ID
 *     description: Retrieve a single joke from the database by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the joke to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single joke.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 text:
 *                   type: string
 *                   example: "Quelle est la femelle du hamster ? L’Amsterdam"
 *       404:
 *         description: Joke not found
 */

router.get('/jokes/:id', jokeController.getJokeById);

// ****** POST ******

// Route pour ajouter une blague

/**
 * @swagger
 * api/jokes:
 *   post:
 *     summary: Add a new joke
 *     description: Add a new joke to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 example: "Quelle est la femelle du hamster ? L’Amsterdam"
 *     responses:
 *       201:
 *         description: Joke added successfully
 *       500:
 *         description: Internal server error
 */
router.post('/jokes', jokeController.addJoke);

module.exports = router;