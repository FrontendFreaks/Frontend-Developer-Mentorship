import React from "react";
import DataTable from "react-data-table-component";
import { data } from "./InterviewQs";
const LearnInterviewQs = () => {
  const columns = [
    {
      name: "Id",
      selector: "id",
      sortable: true,
    },
    { name: "Question", selector: "question", sortable: false },
    { name: "Company", selector: "company", sortable: false },
    { name: "Difficulty", selector: (row) => row.difficulty, sortable: true },
    { name: "Solution", selector: "solution", sortable: false },
    {
      name: "JavaScript Boiler Plate",
      selector: "jsBoilerPlate",
      sortable: false,
    },
    {
      name: "React Boiler Plate",
      selector: "reactBoilerPlate",
      sortable: false,
    },
  ];

  return (
    <div className="mt-32 py-6 px-2 md:px-10 ">
      <DataTable
        title="Frontend Interview Questions"
        columns={columns}
        data={data}
        pagination
        className="bg-white p-4 rounded-lg text-md "
      />
      ;
    </div>
  );
};

export default LearnInterviewQs;
