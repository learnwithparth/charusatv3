import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Placements",
    },
  },
};

const labels = ["2014-15", "2015-16", "2016-17", "2017-18", "2018-19"];

const data = {
  labels,
  datasets: [
    {
      label: "Number of Companies Visited",
      data: [200, 220, 297, 315, 344, 350],
      backgroundColor: "rgba(235, 99, 132, 0.5)",
    },
    {
      label: "No. Students Placed",
      data: [778, 876, 940, 987, 994],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function PlacementRecord() {
  return <Bar options={options} data={data} />;
}
