const express = require("express");
const cors = require('cors');
const morgan = require("morgan");
const loger = require("./utils/logger"); 
const app = express();
require("./core/persistence/connection/connection");
const tokensMiddleware = require("./middleware/tokens");
const middlewares = require("./middleware/middlewares");
app.use(cors());
//SETTINGS
app.set("port", process.env.PORT || 3000);

//MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());

//ROUTES
app.use("/",require("./router/router"));

// Add headers
 


//STAR SERVER
app.listen(app.get("port"), () => {
    loger.info(`Server running at ${app.get("port")}`);
})
