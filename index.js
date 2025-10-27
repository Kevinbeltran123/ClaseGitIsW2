const express = require('express');

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.json());

app.use('/comics', require('./routes/comics'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});