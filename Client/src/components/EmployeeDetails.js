import React from "react";
import { useEmployeesContext } from "../hooks/useEmployeesContext";
import { useAuthContext } from "../hooks/useAuthContext";

//date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const EmployeeDetails = ({ employee }) => {
  const { dispatch } = useEmployeesContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }
    const { role } = user;
    const data = { role };
    const response = await fetch("/api/employees/" + employee._id, data, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_EMPLOYEE", payload: json });
    }
  };

  return (
    <div className="employees-details">
      <h4>{employee.employeename}</h4>
      <p>
        <strong>Designation : </strong>
        {employee.designation}
      </p>
      <p>
        <strong>Employee Email : </strong>
        {employee.employeeemail}
      </p>
      <p>
        <strong>Employee Phone : </strong>
        {employee.employeephone}
      </p>
      <p>
        <strong>Employee id : </strong>
        {employee.employeeid}
      </p>
      <p>
        <strong>Last Updated : </strong>
        {formatDistanceToNow(new Date(employee.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        Delete
      </span>
    </div>
  );
};

export default EmployeeDetails;
