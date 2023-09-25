
const express = require('express');
  
const app = express();
const PORT = 3000;

const path = require('./')
app.use('/static', express.static(path.join(__dirname, 'Static Files')))
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else        
        console.log("Error occurred, server can't start", error);
    }
);