const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Render the main template when accessing the root URL
app.get('/', (req, res) => {
    res.render('index', { title: 'Dashboard', data: [12, 19, 3, 5, 2, 3] });
});

// Error handling to catch any issues
app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
});
