import React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };
  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };
  // const handleNewUser = (event) => {
  //   event.preventDefault();
  // };
  return (
    <div className="form-container">
      <div>
        <h1 className="form-title"> Shipping Information</h1>
        <form>
          <div className="input-group">
            <label for="name">Your Name</label>
            <input onBlur={handleNameBlur} type="text" name="name" required />
          </div>
          <div className="input-group">
            <label for="address">Address</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              required
            />
          </div>
          <div className="input-group">
            <label for="email">Email</label>
            <input value={user?.email} readOnly type="email" name="email" />
          </div>
          <div className="input-group">
            <label for="phone-number ">Phone Number</label>
            <input onBlur={handlePhoneBlur} type="text" name="phone-number" />
          </div>
          <input className="form-submit" type="submit" value="Add Shipping" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
