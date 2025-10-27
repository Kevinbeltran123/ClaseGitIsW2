const comicsController = {};

comicsController.getComics = (req, res) => {
  res.json({
    message: 'Lista de comics',
    comics: []
  });
};

module.exports = comicsController;
