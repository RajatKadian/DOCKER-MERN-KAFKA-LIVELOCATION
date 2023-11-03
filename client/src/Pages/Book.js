import React from 'react';

const Book = (props) => {
  // Access the carDetail prop from the location state
  const carDetail = props.location?.state?.carDetail;

  if (!carDetail) {
    // Handle the case where the carDetail is not available
    return <div>Error: Car details not found!</div>;
  }

  // Format the dates for display
  const formattedAvailableDate = new Date(carDetail.avail).toLocaleDateString();
  const formattedDropDate = new Date(carDetail.drop).toLocaleDateString();

  return (
    <div>
      <h1>Booking Details</h1>
      <h2>Car Details:</h2>
      <p>Name: {carDetail.name}</p>
      <p>Car Condition: {carDetail.desc}</p>
      <p>City: {carDetail.city}</p>
      <p>Available Date: {formattedAvailableDate}</p>
      <p>Drop Date and Time: {formattedDropDate}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default Book;
