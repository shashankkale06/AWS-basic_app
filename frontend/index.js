const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Optional: Serve static files if you have any
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.send("<h1>Hello from Express Frontend</h1><p>This is running on port 3000</p>");
});

app.listen(PORT, () => {
  console.log(`Express frontend running at http://localhost:${PORT}`);
});
