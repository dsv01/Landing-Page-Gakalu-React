import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
// import { BrowserRouters } from "react-router-dom";

import Home from "../src/pages/Home"
import Login from "../src/pages/Login"
import Signup from "../src/pages/Signup"

export default function Router()
{
    return(
        <BrowserRouter>
            <Route element={<Home/>} path="/"/>
            <Route element={<Login/>} path="/Login"/>
            <Route element={<Signup/>} path="/Signup"/>
        </BrowserRouter>
    )
}