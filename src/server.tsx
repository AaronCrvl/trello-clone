function Server(){
    const app =  require("express")
    // const cors = require("cors")
    
    app.listen(3000, ()=> console.log("Started!"))    
}

export default Server;