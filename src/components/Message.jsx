import { Box, Typography } from "@mui/material";
import React from "react";

function Message({ sender, message }) {
	const messageLines = message?.split("\n") || [];

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: sender == "user" ? "flex-end" : "flex-start",
			}}
		>
			<Box
				sx={{
					backgroundColor: sender == "bot" ? "#000" : "#fff",
					padding: "8px",
					display: "flex",
					flexDirection: "column",
					borderRadius: 2,
					gap: 1,
					maxWidth: "70%",
				}}
			>
				{!!messageLines.length &&
					messageLines.map((line) => {
						return (
							<Typography
								sx={{ display: "inline" }}
								color={sender == "bot" ? "#fff" : "#000"}
								fontSize={14}
								fontWeight={400}
							>
								{line}
							</Typography>
						);
					})}
			</Box>
		</Box>
	);
}

export default Message;
