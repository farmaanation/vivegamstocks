import React from "react";
import { useState } from "react";

import { useEmployeesContext } from "../hooks/useEmployeesContext";
import { useAuthContext } from "../hooks/useAuthContext";

const EmployeeForm = () => {
  const { dispatch } = useEmployeesContext();
  const { user } = useAuthContext();

  const [employeename, setEmployeeName] = useState("");
  const [designation, setDesignation] = useState("");
  const [employeeemail, setEmployeeEmail] = useState("");
  const [employeephone, setEmployeePhone] = useState("");
  const [employeeid, setEmployeeId] = useState("");

  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const employee = {
      employeename,
      designation,
      employeeemail,
      employeephone,
      employeeid,
    };

    const response = await fetch("/api/Employees", {
      method: "POST",
      body: JSON.stringify(employee),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setError(null);
      setEmployeeName("");
      setDesignation("");
      setEmployeeEmail("");
      setEmployeePhone("");
      setEmployeeId("");
      setEmptyFields([]);
      console.log("new Employee added:", json);
      dispatch({ type: "CREATE_EMPLOYEE", payload: json });
    }
  };

  return (
    <div className="w-full max-w-xs ">
      <form
        className="create bg-gradient-to-r from-sky-500 to-indigo-500 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Employee Name:
          </label>
          <input
            type="text"
            onChange={(e) => setEmployeeName(e.target.value)}
            value={employeename}
            className={emptyFields.includes("employeename") ? "error" : ""}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Employee Name"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Designation :
          </label>
          <input
            type="text"
            onChange={(e) => setDesignation(e.target.value)}
            value={designation}
            className={emptyFields.includes("designation") ? "error" : ""}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Designation"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Employee Email:
          </label>
          <input
            type="email"
            onChange={(e) => setEmployeeEmail(e.target.value)}
            value={employeeemail}
            className={emptyFields.includes("employeeemail") ? "error" : ""}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Employee Email"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Employee Phone :
          </label>
          <input
            type="number"
            onChange={(e) => setEmployeePhone(e.target.value)}
            value={employeephone}
            className={emptyFields.includes("employeephone") ? "error" : ""}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Employee Phone"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Employee Id :
          </label>
          <input
            type="text"
            onChange={(e) => setEmployeeId(e.target.value)}
            value={employeeid}
            className={emptyFields.includes("employeeid") ? "error" : ""}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Employee Id"
          />
        </div>

        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-600 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-100 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-400">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add Employee
          </span>
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default EmployeeForm;
