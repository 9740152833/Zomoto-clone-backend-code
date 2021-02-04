var express= require('express');

var port = 4244;
var hostname = "localhost";

const app = express();
let student =[{
    id:1,
    name:"Akash",
    city:"Gadag",
},

{
    id:2,
    name:"Arun",
    city:"Gadag",
},

{
    id:1,
    name:"dell",
    city:"bangalore",
},

];

app.use('/student/:studentId', (req, res) => {
    const studentId = req.params.studentId;
    const response = student.filter(item => item.city == studentId);
    res.json(response);
})

app.listen(port,hostname,()=>{
    console.log("Server Up and Running");

});
