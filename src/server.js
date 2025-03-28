const express = require("express");
const cors = require("cors");
const pino = require("pino")();
const dotenv = require("dotenv");
const connectDB = require("./db/initMongoConnection");
const contactsRouter = require("./routes/contacts");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  pino.info(`🚀 Server is running on port ${PORT}`);
});
