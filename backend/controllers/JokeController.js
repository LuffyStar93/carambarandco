const Joke = require('../models/Joke');

const getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    console.log("recup ici")
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getJokeById = async (req, res) => {
  try {
    console.log('ID recherché :', req.params.id); // Log l'ID recherché
    const joke = await Joke.findByPk(req.params.id);
    if (joke) {
      console.log('Blague trouvée :', joke); // Log la blague trouvée
      res.json(joke);
    } else {
      console.log('Blague non trouvée'); // Log si la blague n'est pas trouvée
      res.status(404).json({ error: 'Joke not found' });
    }
  } catch (error) {
    console.error('Erreur interne du serveur:', error); // Log l'erreur
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getRandomJoke = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    if (jokes.length > 0) {
      const randomIndex = Math.floor(Math.random() * jokes.length);
      res.json(jokes[randomIndex]);
    } else {
      res.status(404).json({ error: 'No jokes available' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addJoke = async (req, res) => {
  try {
    const newJoke = await Joke.create({ text: req.body.text });
    res.status(201).json(newJoke);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllJokes,
  getJokeById,
  getRandomJoke,
  addJoke
};