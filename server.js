const express = require("express");

const app = express();

//Root API route
app.use("/api/animals", require("./routes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
