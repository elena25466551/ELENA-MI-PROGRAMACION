const ctrlHome = {}
ctrlHome.getHome=((req,res)=>{
    res.send({
        mensaje:"Petición GET"
    })
})

ctrlHome.postHome=((req,res)=>{
    console.log(req.body)
    res.send({
        mensaje:"Petición POST"
    })
})
ctrlHome.putHome=((req,res)=>{
    res.send({
        mensaje:"Petición PUT"
    })
})
ctrlHome.deleteHome=((req,res)=>{
    res.send({
        mensaje:"Petición DELETE "
    })
})


module.exports = ctrlHome;