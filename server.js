import "dotenv/config";
import { app } from "./src/app.js";
import { connectDB } from "./src/common/config/db.js";
import { configureCors } from "./src/common/config/cors.js";
import {
  addTimeStamp,
  requestLogger,
} from "./src/common/middleware/customMiddleware.js";
import { globalErrorHandler } from "./src/common/middleware/errorHandler.js";

const PORT = process.env.PORT || 3000;
const start = async () => {
  app.use(requestLogger);
  app.use(addTimeStamp);
  app.use(express.json());
  app.use(configureCors());
  await connectDB();
  app.use(globalErrorHandler);
  app.listen(PORT, (req, res) => {
    console.log(`Server is running at ${PORT}`);
  });
};

start().catch((err) => {
  console.log(`Failed to start server`, err);
  process.exit(1);
});
