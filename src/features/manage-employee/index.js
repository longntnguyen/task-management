import React, { useState } from "react";
import { Layout } from "../../components/layout/Layout";
import { Box, Typography } from "@mui/material";
import Button from "../../components/button/Button";
import AddIcon from "@mui/icons-material/Add";
import { CreateEmployeeDialog } from "./components/CreateEmployeeDialog";
import EmployeeTable from "./components/EmployeeTable";
import { employees } from "../../constants/tempData.constant";

const MangeEmployee = () => {
  const [open, setOpen] = useState(false);
  const [employeeEditInfo, setEmployeeEditInfo] = useState({});

  const onAddEmp = () => {
    setOpen(true);
    setEmployeeEditInfo({});
  };

  return (
    <>
      <Layout>
        <Box display="flex" flexDirection="column" gap="10px">
          <Typography variant="h4">Manage Employee</Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="subtitle1">{`${employees.length} Employees`}</Typography>
            <Button
              onClick={onAddEmp}
              variant="outlined"
              fullWidth={false}
              startIcon={<AddIcon />}
            >
              Add a new employee
            </Button>
          </Box>

          <EmployeeTable
            employees={employees}
            onDeleteEmp={(id) => console.log("Employee delete id", id)}
            onEditEmp={(emp) => {
              setEmployeeEditInfo(emp);
              setOpen(true);
            }}
          />
        </Box>
      </Layout>

      <CreateEmployeeDialog
        open={open}
        initialValues={employeeEditInfo}
        onClose={() => setOpen(false)}
        onCreate={(values) => console.log("Create employee", values)}
      />
    </>
  );
};

export default MangeEmployee;
