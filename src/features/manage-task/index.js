import React from "react";
import { Layout } from "../../components/layout/Layout";
import TaskTable from "./components/TaskTable";
import { tasks } from "../../constants/tempData.constant";
import { Box, Typography } from "@mui/material";

const ManageTask = () => {
  return (
    <Layout>
      <Box display="flex" flexDirection="column" gap="10px">
        <Typography variant="h4">Manage Task</Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1">{`${tasks.length} Tasks`}</Typography>
        </Box>

        <TaskTable tasks={tasks} />
      </Box>
    </Layout>
  );
};

export default ManageTask;
