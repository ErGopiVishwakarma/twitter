import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./Route/Navbar";
import MainRoute from "./Route/MainRoute";
import Auth from "./Authentication/Auth";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";
import axios from 'axios'


function App() {
  const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `http://localhost:8080/auth/login/success`;
			const  {data} = await axios.get(url, { withCredentials: true });
			setUser(data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);
  console.log(user)
  return (
      <Flex>
      <MainRoute />
        {/* <Box w='22%'>
          <Navbar />
        </Box>
        <Box w='48%'>
          <Home />
        </Box>
        <Box w='30%' display={{base:'none',md:'none',lg:'block'}}>
          <Navbar />
        </Box> */}
      </Flex>
      
  );
}

export default App;
