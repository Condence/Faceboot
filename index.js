const express = require("express");
const morgan = require("morgan");
const loger = require("./utils/logger"); 
const app = express();
require("./core/persistence/connection/connection");
const tokensMiddleware = require("./middleware/tokens");
const middlewares = require("./middleware/middlewares");

//SETTINGS
app.set("port", process.env.PORT || 3000);

//MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());
 
//app.use(middlewares.tokenMiddlewares);

//ROUTES
app.use("/",require("./router/router"));

//STAR SERVER
app.listen(app.get("port"), () => {
    loger.info(`Server running at ${app.get("port")}`);
})
const token = tokensMiddleware.generateToken({
    _id: "234234234234",
    name: "David Emanuel"
});
console.log(token);
const token2 = "243242ssasas352hjhgr353eeeeef52";
try {
    const tokenDecoded = tokensMiddleware.validateToken(token); 
    console.log(tokenDecoded);
} catch (err) {
    console.error(err);
}
 