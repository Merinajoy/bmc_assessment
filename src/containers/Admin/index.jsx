import React, { useEffect, useState } from "react";
import CreatorsTable from "../../components/CreatorsTable";
import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BarChartIcon from "@mui/icons-material/BarChart";
import StatsModal from "../../components/StatsModal";
import AddCreator from "../../components/AddCreator";
import toast, { Toaster } from "react-hot-toast";
import { config } from "../../config";
import axios from "axios";
import "./style.css";

function Admin() {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(2);
  const [openStats, setOpenStats] = useState(false);
  const [openAddCreator, setOpenAddCreator] = useState(false);
  const [chartData, setChartData] = useState({});

  const getChartData = () => {
    const totalUsers = rows.length;

    // Count the number of males and females
    const genderCounts = rows.reduce(
      (acc, user) => {
        if (user.gender === "male") {
          acc.male += 1;
        } else if (user.gender === "female") {
          acc.female += 1;
        }
        return acc;
      },
      { male: 0, female: 0 }
    );

    // Count the number of active males and females
    const activeCounts = rows.reduce(
      (acc, user) => {
        if (user.gender === "male" && user.status === "active") {
          acc.male += 1;
        } else if (user.gender === "female" && user.status === "active") {
          acc.female += 1;
        }
        return acc;
      },
      { male: 0, female: 0 }
    );

    // Calculate percentages
    const males = ((genderCounts.male / totalUsers) * 100).toFixed(1);
    const females = ((genderCounts.female / totalUsers) * 100).toFixed(1);

    // Calculate active percentages based on total counts
    const totalActives = activeCounts.male + activeCounts.female;
    const activeMales = ((activeCounts.male / totalActives) * 100).toFixed(1);
    const activeFemales = ((activeCounts.female / totalActives) * 100).toFixed(
      1
    );

    setChartData({
      males: males,
      females: females,
      activeMales: activeMales,
      activeFemales: activeFemales,
    });
  };

  const getCreators = () => {
    axios
      .get("https://gorest.co.in/public/v2/users")
      .then((response) => {
        setRows(response.data);
      })
      .catch((error) => {
        toast.error("Oops...something went wrong");
      });
  };

  const deleteCreator = (id) => {
    axios
      .delete(`https://gorest.co.in/public/v2/users/${id}`, config)
      .then((response) => {
        if (response.status === 200 || response.status === 204) {
          toast.success("Creator deleted");
        } else {
          toast.error("Something went wrong");
        }
      })
      .catch((error) => {
        toast.error("Please try again later");
      });
  };

  const loadMore = () => {
    axios
      .get(
        `https://gorest.co.in/public/v2/users?page=${page}&per_page=${10}`,
        config
      )
      .then((response) => {
        setRows([...rows, ...response.data]);
      })
      .catch((error) => {
        toast.error("Could not load more data");
      });
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    loadMore();
  };

  const addCreator = (data) => {
    axios
      .post(`https://gorest.co.in/public/v2/users`, data, config)
      .then((response) => {
        setOpenAddCreator(false);
        if (response.status === 200 || response.status === 201) {
          toast.success("Creator added successfully");
        } else if (response.status === 422) {
          toast.error("This creator already exists");
        }
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });
  };

  useEffect(() => {
    getCreators();
  }, []);

  useEffect(() => {
    if (rows) {
      getChartData();
    }
  }, [rows]);

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="main_container">
        <div className="table_heading_container">
          <div className="table_heading">Manage creators</div>
          <div className="buttons_container">
            <button
              className="button secondary"
              onClick={() => setOpenStats(true)}
            >
              <div className="stats_btn">
                <div className="stat_icon">
                  <BarChartIcon fontSize="small" />
                </div>
                <div>View Stats</div>
              </div>
            </button>
            <button
              className="button primary"
              onClick={() => setOpenAddCreator(true)}
            >
              + Add a new creator
            </button>
          </div>
          <StatsModal
            open={openStats}
            handleClose={() => setOpenStats(false)}
            chartData={chartData}
          />
          <AddCreator
            open={openAddCreator}
            handleClose={() => setOpenAddCreator(false)}
            handleAddCreator={addCreator}
          />
        </div>
        <div className="table_container">
          <CreatorsTable rows={rows} handleDelete={deleteCreator} />
        </div>
        <div className="load_container">
          <div onClick={() => handleLoadMore()} className="load_more_btn">
            <div>Load more</div>
            <ArrowDownIcon className="arrow_icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
