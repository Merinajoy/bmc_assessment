import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Popover,
} from "@mui/material";
import "./style.css";

function CreatorsTable({ rows, handleDelete }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <TableContainer component={Paper} className="users_table_container">
        <Table stickyHeader aria-label="creators list" className="users_table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell align="center">Available for chat</TableCell>
              <TableCell align="right">Action</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              ? rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>
                      {row.gender.charAt(0).toUpperCase() + row.gender.slice(1)}
                    </TableCell>
                    <TableCell align="center">
                      {row.status === "active" ? (
                        <div className="green">Active</div>
                      ) : (
                        <div className="red">Inactive</div>
                      )}
                    </TableCell>
                    <TableCell align="right">
                      <button className="edit_button">Edit</button>
                    </TableCell>
                    <TableCell align="left">
                      <DeleteIcon
                        onClick={(e) => handleClick(e)}
                        className="delete_icon"
                      />
                    </TableCell>
                    <Popover
                      id={id}
                      open={open}
                      elevation={0}
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                    >
                      <div className="delete_popover_container">
                        <div className="delete_popover_title">
                          Are you sure?
                        </div>
                        <div className="delete_popover_buttons">
                          <div
                            className="popover_button"
                            onClick={() => {
                              handleDelete(row.id);
                              handleClose();
                            }}
                          >
                            Yes
                          </div>
                          <div
                            className="popover_button"
                            onClick={() => handleClose()}
                          >
                            No
                          </div>
                        </div>
                      </div>
                    </Popover>
                  </TableRow>
                ))
              : ""}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default CreatorsTable;
