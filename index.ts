import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());

//middleware
const userAgent = (req: Request, res: Response, next: NextFunction) => {
  console.log("zaman:", Date.now());
  next();
};

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

// ____________________________________________________________
app.get("/user", (req: Request, res: Response) => {
  const users = [
    { name: "ali", age: 20 },
    { name: "mmd", age: 21 },
    { name: "hossin", age: 51 },
    { name: "hamed", age: 41 },
  ];
  res.send(users);
});

// __________________________________________________________

app.get("/product", userAgent, (req: Request, res: Response) => {
  const products = [];

  for (let i = 1; i <= 50; i++) {
    products.push({
      name: `محصول ${i}`,
      inventory: Math.floor(Math.random() * 1000) + 1,
      country: `کشور ${String.fromCharCode(
        65 + Math.floor(Math.random() * 26)
      )}`,
    });
  }

  res.send(products);
});

app.post("/send-otp", userAgent, (req: Request, res: Response) => {
  const otp = [];

  otp.push(req.body);
  console.log(otp);
});
// ______________________________________________________________________________

app.use(userAgent);

app.listen(3000, () => {
  console.log("Running Port 3000 Server");
});
