import React, { useEffect, useState } from "react";
import { FormControl, MenuItem, Modal, Select } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { PieChart } from "@mui/x-charts/PieChart";
import "./style.css";

function StatsModal({ open, handleClose, chartData }) {
  const [filter, setFilter] = useState(1);
  const [pieData, setPieData] = useState([]);
  let genderData = [
    {
      id: 0,
      value: chartData.males,
      color: "#62b2fd",
    },
    {
      id: 1,
      value: chartData.females,
      color: "#9bdfc4",
    },
  ];

  let activeData = [
    {
      id: 0,
      value: chartData.activeMales,
      color: "#62b2fd",
    },
    {
      id: 1,
      value: chartData.activeFemales,
      color: "#9bdfc4",
    },
  ];

  const handleFilter = (val) => {
    setFilter(val);
    setPieData(val === 1 ? genderData : activeData);
  };

  useEffect(() => {
    setPieData(genderData);
  }, [chartData]);

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className="stats_modal_container">
          <div className="close_icon">
            <CloseIcon onClick={() => handleClose()} size="small" />
          </div>
          <div className="stats_header_container">
            <div className="stats_heading">Stats</div>
            <div className="stats_filter">
              <FormControl sx={{ minWidth: "180px" }}>
                <Select
                  value={filter}
                  size="small"
                  onChange={(e) => handleFilter(e.target.value)}
                >
                  <MenuItem value={1}>Gender</MenuItem>
                  <MenuItem value={2}>Available for chat</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="stats_content_container">
            <div className="stats_chart">
              <PieChart series={[{ data: pieData }]} width={300} height={200} />
            </div>
            <div className="stats_container">
              <div className="stats_title">Gender Distribution</div>
              <div className="stats_name">
                <div className="female_color"></div>
                <div>Female</div>
              </div>

              <div className="stats_value">
                {filter === 1 ? chartData.females : chartData.activeFemales}%
              </div>

              <div className="stats_name">
                <div className="male_color"></div>
                <div>Male</div>
              </div>
              <div className="stats_value">
                {filter === 1 ? chartData.males : chartData.activeMales}%
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default StatsModal;
