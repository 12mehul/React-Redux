import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store/store";
import { IEmployee } from "./redux/types/IEmpTypes";
import { EmployeeRequest } from "./redux/actions/employeeActions";

const AddEmployees = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [data, setData] = useState<IEmployee>({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(EmployeeRequest(data));
    setData({ name: "", email: "", phone: "" });
  };

  return (
    <div>
      <h2>AddEmployees</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={data.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddEmployees;
