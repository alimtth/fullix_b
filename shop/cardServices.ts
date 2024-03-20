import { NextFunction, Router } from "express";

const router = Router();

router.patch('/shop/card', async (req: Request, res: Response, next: NextFunction) => {
    try{
        const body : string = req.body;
        const addToRes = await card(body)
        res.send(addToRes)

    }//catch(___){

    // }
})

//feat: add to card middlewares