/* Script pour ajouter des blagues à la base de données */

const sequelize = require('./config/database');
const Joke = require('./models/Joke');

const jokes = [
  { text: 'Quelle est la femelle du hamster ? L’Amsterdam' },
  { text: 'Que dit un oignon quand il se cogne ? Aïe' },
  { text: 'Quel est l\'animal le plus heureux ? Le hibou, parce que sa femme est chouette.' },
  { text: 'Pourquoi le football c\'est rigolo ? Parce que Thierry en rit' },
  { text: 'Quel est le sport le plus fruité ? La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes.' },
  { text: 'Que se fait un Schtroumpf quand il tombe ? Un Bleu' },
  { text: 'Quel est le comble pour un marin ? Avoir le nez qui coule' },
  { text: 'Qu\'est ce que les enfants usent le plus à l\'école ? Le professeur' },
  { text: 'Quel est le sport le plus silencieux ? Le para-chuuuut' },
  { text: 'Quel est le comble pour un joueur de bowling ? C’est de perdre la boule' }
];

sequelize.sync({ force: true }).then(async () => {
  await Joke.bulkCreate(jokes);
  console.log('Blagues ajoutées avec succès.');
  sequelize.close();
});