require("dotenv").config();

const server = require("./api/server");

const port = process.env.port || 9001

server.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
