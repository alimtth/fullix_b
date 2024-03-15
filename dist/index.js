"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
//middleware
const userAgent = (req, res, next) => {
    console.log("zaman:", Date.now());
    next();
};
app.get("/", (req, res) => {
    res.send("hello");
});
// ____________________________________________________________
app.get("/user", (req, res) => {
    const users = [
        { name: "ali", age: 20 },
        { name: "mmd", age: 21 },
        { name: "hossin", age: 51 },
        { name: "hamed", age: 41 },
    ];
    res.send(users);
});
// __________________________________________________________
app.get("/product", userAgent, (req, res) => {
    const products = [];
    for (let i = 1; i <= 50; i++) {
        products.push({
            name: `محصول ${i}`,
            inventory: Math.floor(Math.random() * 1000) + 1,
            country: `کشور ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`,
        });
    }
    res.send(products);
});
app.post("/send-otp", userAgent, (req, res) => {
    const otp = [];
    otp.push(req.body);
    console.log(otp);
});
// ______________________________________________________________________________
app.use(userAgent);
app.listen(3000, () => {
    console.log("Running Port 3000 Server");
});
