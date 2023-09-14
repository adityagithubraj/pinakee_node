const express = require("express");
const app = express();


app.use(express.json());
port = 3100;

//.........GET raute.............//

app.get("/",(req,res)=>{
    console.log("Welcome to the RESTful Node.js server")
    res.send("Welcome to the RESTful Node.js server")
})

//..........POST raute...........//
app.post("/api",(req,res)=>{
    const data = req.body
    console.log("Received data in PUT raute:", data);
    res.json({ message: `Data received successfully via PUT ${data}` });
})

//.............PUT endpoint..................//
app.put('/api', (req, res) => {
    const data = req.body;
    console.log("DATA updated successfully:", data);
    res.json({ message: 'Data updated successfully via PUT' });
  });

  
  //............DELETE endpoint...............................//
  app.delete('/api', (req, res) => {
    res.json({ message: "deleted successfully via DELETE" });
  });


//................Start the server...................//

app.listen(port,(req,res)=>{
    console.log(`server is runig on port ${port}`)
})