import Message from "./components/Message";
import MessageField from "./components/MessageField";
import { Box } from "@mui/material";
import { useState } from "react";
import { alpha } from "@mui/material";
import axios from "axios";
import {useMediaQuery} from "@mui/material";
import Loader from "./components/Loader";
import mnitLogo from "./assets/mnit_logo.webp"
function App() {
	const [messages, setMessages] = useState([
		{ sender: "bot", message: "Hello! How may I help you?" },
	]);
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
	const isMobile = useMediaQuery("(max-width: 600px)");
	const handleMessage = async () => {
		setLoading(true);
		setMessages((prev) => [...prev, { sender: "user", message }]);
		setMessage("")
		const queries = messages
			.filter((message) => message.sender == "user")
			.map((message) => message.message);
		try {
			const res = await axios.post("http://localhost:3000/query", {
				queries: [...queries, message],
			});
			const queryResult =
				res?.data?.message;
			setMessages((prev) => [...prev, { sender: "bot", message: queryResult }]);
			setLoading(false)
		} catch (error) {
			console.log(error);
			setLoading(false)
			
		}
	};
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				height: "90vh",
				width: isMobile ? "90vw" : "50vw",
				border: "1px solid #000",
				padding: 2,
				borderRadius: 2,
				background: "transparent",
				backdropFilter: "blur(20px)",
				boxShadow: `0 0 30px ${alpha("#ddd", 0.2)}`,
			}}
		>
			<img src={mnitLogo} alt="mnit" height={50} width={50} />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					overflowY: "scroll",
					gap: "10px",
					flexGrow: "1",
					p: 2
				}}
			>
				{!!messages.length &&
					messages.map((message) => {
						return (
							<Message sender={message.sender} message={message.message} />
						);
					})}
					{loading && (<Loader />)}
			</Box>
			<Box>
				<MessageField
					message={message}
					setMessage={setMessage}
					handleMessage={handleMessage}
				/>
			</Box>
		</Box>
	);
}

export default App;
