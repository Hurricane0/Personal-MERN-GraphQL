const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

mongoose.connect(
  "mongodb+srv://Nikita:nikitadv@cluster0-dqps1.mongodb.net/PersonalWebsite?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

const app = express();
const PORT = process.env.PORT || 5000;

const dbConnection = mongoose.connection;

dbConnection.on("error", (err) => console.log(err));
dbConnection.once("open", () => console.log("Connected to database"));

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Server is started on port ${PORT}...`);
});
