import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const Loader = () => {
	const [text, setText] = useState("");
	useEffect(() => {
		const interval = setInterval(() => {
			if (text.length >= 3) {
				setText("");
			} else {
				setText((prev) => prev + ".");
			}
		}, 500);
		return () => clearInterval(interval);
	}, [text]);
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
			}}
		>
			<Box
				sx={{
					backgroundColor: "#000",
					padding: "8px",
					justifyContent: "center",
					
					display: "flex",
					flexDirection: "column",
					borderRadius: 1,
					width: "25px",
					height: "25px"
				}}
			>
				<Typography variant="h6" color="#fff">
					{text}
				</Typography>
			</Box>
		</Box>
	);
};

export default Loader;
