import {connect} from "../../utils/dbconnection"
import { NextApiRequest,NextApiResponse } from "next";


export default async function (req: NextApiRequest,res:NextApiResponse){
    const {db} = await connect();
    const data = {
        registerform:req.body
    }

    console.log(data);

    console.log(data.registerform)

    const result = await db.collection("registerform").insertOne({
        customer:{
            type:"text",
            info:{
                name:data.registerform.data.name,
                email:data.registerform.data.email,
                phone:data.registerform.data.phone
            },
            createdAt: new Date(),
        }
    })


    res.json({});
}