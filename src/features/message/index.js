import React from "react";
import { Layout } from "../../components/layout/Layout";
import { Box } from "@mui/material";
import ChatList from "./components/ChatList";
import ChatContent from "./components/ChatContent";

const Message = () => {
  return (
    <Layout>
      <Box display="flex" gap={2}>
        <Box
          flexBasis="30%"
          sx={{
            overflowY: "auto",
          }}
        >
          <ChatList />
        </Box>

        <Box height="100%" flexGrow={1}>
          <ChatContent />
        </Box>
      </Box>
    </Layout>
  );
};

export default Message;
