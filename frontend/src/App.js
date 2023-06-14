import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./Route/Navbar";
import MainRoute from "./Route/MainRoute";
import Auth from "./Authentication/Auth";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";
import axios from 'axios'
import MainPage from "./Pages/MainPage";


function App() {


  const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `http://localhost:8080/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);
  return (
      <Flex>
      <MainPage />
      </Flex>
      
  );
}

export default App;
