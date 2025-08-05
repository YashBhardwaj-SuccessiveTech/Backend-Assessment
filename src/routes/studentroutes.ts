import express from "express"
import addstudent from "../controllers/addstudent";
import studentbyid from "../controllers/studentbyid";
import deletebyid from "../controllers/deletebyid";
import updatestudent from "../controllers/updatestudent";
import getallstudents from "../controllers/getallstudents";
import addstudentmidd from "../middlewares/addstudentmidd";
import register from "../controllers/register";
import { errorhandler } from "../middlewares/errorhandler";
import mockdatafeed from "../scripts/mockdata";
import getseeddata from "../controllers/getseeddata";
import registernew from "../controllers/registernew";
import loginnew from "../controllers/loginnew";

const router= express.Router();
router.use(express.json());

router.get("/",(req,res)=>{
    res.json({
        success:true,
        message:"server working fine"
    });
})

// check validation
router.post("/registernew",registernew);
router.post("/login",loginnew);

router.get("/students",getallstudents);
router.post("/students",addstudentmidd,addstudent);
router.get("/students/:id",studentbyid);
router.delete("/students/:id",deletebyid);
router.put("/student/:id",updatestudent);

// pagination
router.get("/seedpagination",getseeddata);

// mock data seeding
router.post("/feedData",mockdatafeed);


// global error handler
router.use(errorhandler);

export default router;