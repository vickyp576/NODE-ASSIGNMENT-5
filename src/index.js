var http = require("http");
const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.url === "/Welcome") {
     res.writeHead(200, { "Content-Type": "text/plain" });
     res.end(" Welcome to Dominos!");
  }
   else if (req.url === "/contact") {
      res.writeHead(200, { "Content-Type": "text/plain" });
    // res.end("phone : 18602100000 \nemail : guestcaredominos@jublfood.com");
      res.end( JSON.stringify(
        {
          phone: "18602100000",
          email: "guestcaredominos@jublfood.com",
        }
      ))
  }
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
}

httpServer.listen(8081, () =>
  console.log(" \n  Server listening PORT --> 8081 ")
);

module.exports = httpServer;
