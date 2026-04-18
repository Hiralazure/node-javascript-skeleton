import "dotenv/config";
import { app } from "./src/app.js";
import { connectDB } from "./src/common/config/db.js";

const PORT = process.env.PORT || 3000;
const start = async () => {
  await connectDB();
  app.listen(PORT, (req, res) => {
    console.log(`Server is running at ${PORT}`);
  });
};

start().catch((err) => {
  console.log(`Failed to start server`, err);
  process.exit(1);
});
