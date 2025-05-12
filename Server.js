const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/api/lottery/result', (req, res) => {
  res.json({
    round: '123456',
    value: '78',
    prediction: 'Green',
    time: '4:50 PM'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
