import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./Route/Navbar";
import MainRoute from "./Route/MainRoute";
import Auth from "./Authentication/Auth";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";
import axios from 'axios'
import MainPage from "./Pages/MainPage";

const twitteruserdata = localStorage.getItem('twitteruserdata')
function App() {


  const [user, setUser] = useState(twitteruserdata || {});

	const getUser = async () => {
		try {
			const url = `http://localhost:8080/auth/login/success`;
		await axios.get(url, { withCredentials: true })
		.then(res=>{
			console.log(res)
			setUser(res.user._json);
		})
		
		} catch (err) {
			console.log(err.message)
		}
	};

	useEffect(() => {
		getUser();
		localStorage.setItem('twitteruserdata',JSON.stringify(user))
	}, []);
	console.log(user)
  return (
      <>
		{
			user?<MainRoute />:<Auth />
		}
	  </>
      
  );
}

export default App;
