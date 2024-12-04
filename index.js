import express from 'express'
const app = express()
app.use(express.json());

let posts = [{
    id: 1,
    title: "one",
    text: "nnkrjnd"
},
{
    id: 2,
    title: "two",
    text: "nnkrjnd"
},
{
    id: 3,
    title: "three",
    text: "nnkrjnd"
},
]

app.get('/posts', (req, res) => {
  res.json({posts})
})


app.get('/posts/:id', (req, res) => {
    const id = parseInt(req.params['id'])
    const post = posts.find(post => post.id === id)
    res.status(200).json(post)
})

app.post('/posts/add-post', (req, res) => {
    const newPost = req.body
    posts.push(newPost)
    res.status(200).json({"post": newPost});
})

app.delete('/posts/:id', (req, res) => {
    const id = parseInt(req.params['id'])
    posts = posts.filter(post => post.id !== id)
    res.json({ posts });
})

const PORT = 4200;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});