import { Box, TextField, Button } from "@mui/material";

const MessageField = ({message, setMessage, handleMessage}) => {
    return (
        <Box 
            display="flex"
            gap={2}
        >
            <TextField 
            value={message}
            onChange={e => setMessage(e.target.value)}
            name="message"
            placeholder="What's your query?"
            fullWidth
            sx={{
                "& .MuiInputBase-root": {
                    color: "#fff"
                }
            }}
        />
        <Button variant="contained" onClick={handleMessage}>
                Send
        </Button>
        </Box>
    )
}
export default MessageField;