import reportWebVitals from "../reportWebVitals";

function Server(){
    const bodyParser = require("body-parser")
    const app = require("express")
    app.use(bodyParser)
    app.listen(3000, ()=> console.log("☄🖥"))        
}

export default Server; // !_☄ 