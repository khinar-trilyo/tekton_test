const express=require('express')
const app=express()
const crypto=require('crypto')
app.use(express.json());
const namespace=process.env["namespace"]
// const namespace="durian"


app.post('/',(req,res)=>{
    console.log("Recieved request at ",new Date().toLocaleString('en-US',{timeZone:'Asia/Kolkata'}))
    console.log(req.body)
    console.log(JSON.stringify(req.body))
    //console.log(req.headers['epi-sig'])
    //let recieved_signature=req.headers["epi-sig"]
    //let expected_signature=crypto.createHash('sha256').update(JSON.stringify(req.body)).digest('hex')
    //console.log("Expected signature is ",expected_signature)
    //if (recieved_signature===expected_signature && req && req.body.namespace===namespace)
    //{
        try{
            let result=require.main.require('./'+req.body.function+'.js')(req.body.session,req.body.config,req.body.callback,req.body.metadata)
            res.json({"execResult":result})
        }
        catch (e) {
            res.json({"execResult":"No such method in this namespace"}).status(400)

        }
    //}
    //else{
      //  res.status(403).end();
    //}
    req.body;
})

app.listen(8080,()=>console.log("Server started on port 8080 for namespace "+namespace))
