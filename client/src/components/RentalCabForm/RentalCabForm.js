import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const formStyle = {
  maxWidth: "60%",
  margin: "5%",
  padding: "20px",
  border: "2px solid #ccc",
  borderRadius: "15px",
  backgroundColor: "#f9f9f9",
};

const labelStyle = {
  fontWeight: "bold",
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "white",
  border: "none",

};

const RentalCabForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    carName: "",
    desc: "",
    available: new Date(),
    DropDate: new Date(),
    city: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (name, date) => {
    setFormData({ ...formData, [name]: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8081/cars/saveCars",
        formData
      );
      console.log("Data sent successfully:", response.data);

      // Clear form fields
      setFormData({
        email: "",
        carName: "",
        desc: "",
        available: new Date(),
        DropDate: new Date(),
        city: "",
      });

      // Show a success alert
      alert("Data saved successfully!");
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div>
    <h1><strong>BECOME A HOST</strong></h1>
      <Form style={formStyle} onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label style={labelStyle}>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="carName">
          <Form.Label style={labelStyle}>Car Name</Form.Label>
          <Form.Control
            type="text"
            name="carName"
            value={formData.carName}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="desc">
          <Form.Label style={labelStyle}>Description</Form.Label>
          <Form.Control
            type="text"
            name="desc"
            value={formData.desc}
            onChange={handleInputChange}
          />
          <br></br>
        </Form.Group>
        <Form.Group controlId="available">
          <Form.Label style={labelStyle}>Available Date</Form.Label>
          <br></br>
          <br></br>
          <DatePicker
            name="available"
            selected={formData.available}
            onChange={(date) => handleDateChange("available", date)}
          />
          <br></br>
        </Form.Group>
        <br></br>
        <Form.Group controlId="DropDate">
          <Form.Label style={labelStyle}>Drop Date</Form.Label>
          <br></br>
          <DatePicker
            name="DropDate"
            selected={formData.DropDate}
            onChange={(date) => handleDateChange("DropDate", date)}
          />
        </Form.Group>
        <br></br>
        <Form.Group controlId="city">
          <Form.Label style={labelStyle}>City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </Form.Group>
        <br></br>
        <Button style={buttonStyle} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RentalCabForm;
