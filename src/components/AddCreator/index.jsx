import {
  FormControl,
  FormControlLabel,
  MenuItem,
  Modal,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import "./style.css";

function AddCreator({ open, handleClose, handleAddCreator }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    gender: "male",
    status: "active",
  });

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className="add_modal_container">
          <div className="close_icon">
            <CloseIcon onClick={() => handleClose()} size="small" />
          </div>
          <div className="add_header_container">
            <div className="add_heading">Add a new creator</div>
          </div>

          <div className="form_row">
            <div className="form_row_label">Creator Name</div>
            <FormControl
              sx={{ minWidth: "240px" }}
              size="small"
              variant="outlined"
            >
              <OutlinedInput
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </FormControl>
          </div>

          <div className="form_row">
            <div className="form_row_label">Email</div>
            <FormControl
              sx={{ minWidth: "240px" }}
              size="small"
              variant="outlined"
            >
              <OutlinedInput
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </FormControl>
          </div>

          <div className="form_row">
            <div className="form_row_label">Gender</div>
            <FormControl
              sx={{ minWidth: "240px" }}
              size="small"
              variant="outlined"
            >
              <Select
                value={values.gender}
                onChange={(e) =>
                  setValues({ ...values, gender: e.target.value })
                }
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="form_row">
            <div className="form_row_label">Available for chat</div>
            <RadioGroup
              row
              value={values.status}
              onChange={(e) => setValues({ ...values, status: e.target.value })}
            >
              <FormControlLabel
                value="active"
                control={<Radio size="small" />}
                label={<div className="form_row_status">Active</div>}
              />
              <FormControlLabel
                value="inactive"
                control={<Radio size="small" />}
                label={<div className="form_row_status">Inactive</div>}
              />
            </RadioGroup>
          </div>
          <div className="form_row">
            <button
              className="add_button primary"
              onClick={() => handleAddCreator(values)}
            >
              + Add creator
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default AddCreator;
