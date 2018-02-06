const routes = require("express").Router();


routes.use("/", require("./patterns"))
routes.use("/", require("./elements"))
routes.use("/", require("./components"))
routes.use("/", require("./pages"))
routes.use("/", require("./journeys"))
routes.use("/", require("./content"))


routes.get("/", function (req, res) {
  res.render("index",
    data = {
      pageTitle : "Reform Pattern Library"
    }
  )
})


module.exports = routes;
