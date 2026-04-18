import "dotenv/config";
import { app } from "./src/app.js";

const PORT = process.env.PORT || 3000;
const start = async () => {
  app.listen(PORT, (req, res) => {
    console.log(`Server is running at ${PORT}`);
  });
};

start().catch((err) => {
  console.log(`Failed to start server`);
  process.exit(1);
});
