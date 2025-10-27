const axios = require('axios');
const comicsController = {};

comicsController.getComics = (req, res) => {
  const APIkey = process.env.APIKEY;
  const TS = process.env.TS;
  const HASH = process.env.HASH;
  const MARVEL_API = process.env.MARVEL_API;

  axios.get(`${MARVEL_API}?ts=${TS}&apikey=${APIkey}&hash=${HASH}`)
    .then(response => {
      res.json({
        message: 'Lista de comics',
        comics: response.data.data.results
      });
    })
    .catch(error => {
      console.error('Error fetching comics:', error);
    });
};

module.exports = comicsController;

