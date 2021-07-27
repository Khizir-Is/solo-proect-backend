require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const chalk = require("chalk");
const indexRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(indexRouter);

const connectAndServer = async () => {
  const { PORT, mongoServer } = process.env;
  try {
    await mongoose.connect(mongoServer, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });
    app.listen(PORT, () => {
      console.log(chalk.blue(`Успешно соединилось к пору ${PORT}`));
    });
  } catch (e) {
    console.log(chalk.red(`Ошибка при подключении: ${e.toString()}`));
  }
};

connectAndServer();
