require("dotenv").config();
const connectDb = require("./db/db");
const postsRouter = require("./routes/posts");
const projectRouter = require("./routes/projects");
const express = require("express");
const cors = require("cors");
const app = express();

connectDb();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(`/api/posts`, postsRouter);
app.use(`/api/project`, projectRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
