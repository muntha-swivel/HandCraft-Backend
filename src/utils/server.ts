import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const createServer = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  const corsOptions = {
    origin: "https://handcraft.vercel.app",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  };
  app.use(cors(corsOptions));

  return app;
};

export default createServer;
