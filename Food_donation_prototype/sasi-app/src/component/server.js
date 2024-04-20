const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/register', (req, res) => {
  // Assuming 'users' is the collection in db.json to store registered users
  const users = router.db.get('users');
  const newUser = req.body;

  // Check if the user with the same email already exists
  const existingUser = users.find({ email: newUser.email }).value();

  if (existingUser) {
    res.status(400).json({ error: 'User with this email already exists' });
  } else {
    // Add the new user to the 'users' collection in db.json
    users.push(newUser).write();

    res.status(201).json(newUser);
  }
});

server.use(router);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
