import reportWebVitals from "./reportWebVitals";
function Server(){
    const app =  require("express")
    app.listen(3000, ()=> console.log("☄🖥"))    
    reportWebVitals(console.log)
}

export default Server; // !_☄