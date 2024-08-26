import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('server is ready')
})

app.get('/jokes', (req, res) => {
    res.json({
      jokes: [
        {
          id: 1,
          joke: "Why don’t skeletons fight each other?",
          punchline: "They don’t have the guts!"
        },
        {
          id: 2,
          joke: "What do you call fake spaghetti?",
          punchline: "An impasta!"
        },
        {
          id: 3,
          joke: "Why did the scarecrow win an award?",
          punchline: "Because he was outstanding in his field!"
        },
        {
          id: 4,
          joke: "What do you call cheese that isn’t yours?",
          punchline: "Nacho cheese!"
        },
        {
          id: 5,
          joke: "Why did the math book look sad?",
          punchline: "Because it had too many problems!"
        }
      ]
    });
  });



const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server is listening at ${port}`);
});