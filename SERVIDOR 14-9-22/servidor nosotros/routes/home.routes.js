const router=require("express").Router()//uso rutas express
const {getHome,postHome,putHome,deleteHome}=require("../controller/home.controller")
router.get("/",getHome)
router.get("/user",getHome)
router.post("/user",postHome)
router.put("/user",putHome)
router.delete("/use",deleteHome)
module.exports = router