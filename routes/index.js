module.exports = (app) => {
  app.get('/', (req, res) => res.send('Hello World!'));
  app.get('/about', (req, res) => res.send('AboutSSS'));
}
