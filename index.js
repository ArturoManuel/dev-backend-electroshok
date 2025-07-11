import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import api from "./routes.js";
import helmet from "helmet";

const FRONTEND_URL = "http://localhost:4001";

const corsOptions = {
  origin: FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

const app = express();

// Middleware de seguridad - Helmet
app.use(helmet());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
    type: "application/x-www-form-urlencoded",
  })
);
app.use(cors(corsOptions));

app.use("/api/v1", api);

const PUERTO = "4001";

app.listen(PUERTO, () => {
  console.log(`Listening on ${PUERTO}`);
});

export default app; // Export the app for testing purposes
