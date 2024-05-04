import React from "react";

function Reports() {
  // Sample report data for demonstration purposes
  const reports = [
    { id: 1, title: "Sales Report", date: "2022-10-15", amount: "$1000" },
    { id: 2, title: "Inventory Report", date: "2022-10-20", amount: "$500" },
    { id: 3, title: "Expense Report", date: "2022-10-25", amount: "$300" },
  ];

  return (
    <div>
      <h2>Reports</h2>
      <ul>
        {reports.map((report) => (
          <li key={report.id}>
            <strong>Title:</strong> {report.title}, <strong>Date:</strong>{" "}
            {report.date}, <strong>Amount:</strong> {report.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reports;
