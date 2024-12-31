const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});
module.exports = (req, res, next) => {
  if (req.method === "GET" && req.path.includes("_page")) {
    const totalCount = res.get("Content-Range");
    if (totalCount) {
      res.setHeader("X-Total-Count", totalCount.split("/")[1]);
    }
  }
  res.header("Access-Control-Expose-Headers", "X-Total-Count");
  next();
};

