import express from "express";
import config from "./config";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import xss from "xss-clean";
import hpp from "hpp";
import AppError from "./utils/appError.util";
import ErrorController from "./controllers/error.controller";
import AdminRoute from "./routes/admin.route";
import EmployeeRoute from "./routes/employee.route";
import UserRoute from "./routes/user.route";

const app = express();

app.use(helmet());

if (config.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
  })
);
//Data Sanitisation against XSS
app.use(xss());
//Prevent Parameter Pollution
app.use(
  hpp({
    whitelist: [], //Parameters for which we don't wanna restrict duplications
  })
);

app.use("/admin", AdminRoute);
app.use("/employee", EmployeeRoute);
app.use("/user", UserRoute);

app.use("*", (req, res, next) => {
  next(
    new AppError(`can't find requested URL - ${req.url} on this server`, 404)
  );
});

app.use(ErrorController);

export { app };
