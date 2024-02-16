import express, {Router, Response, Request} from "express";
import {findAll} from "../bl/pokemonBL";

const app:Router = express.Router();


app.get("/", (req:Request, res:Response) => {
    res.send(findAll())
})

module .exports = app;