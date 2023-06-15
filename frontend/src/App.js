import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./Route/Navbar";
import MainRoute from "./Route/MainRoute";
import Auth from "./Authentication/Auth";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";
import axios from 'axios'
import MainPage from "./Pages/MainPage";
import Login from "./auth/Login";


function App() {

	const twitteruser = localStorage.getItem('twitteruser') || ""
  
  return (
      <>
		{
			twitteruser?<MainRoute />:<Login />
		}
	  </>
      
  );
}

export default App;
