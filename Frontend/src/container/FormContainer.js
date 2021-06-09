import React, { useEffect, useState } from 'react';
import InputComponent from '../components/InputComponent/InputComponent';
import TextAreaComponent from '../components/TextAreaComponent/TextAreaComponent';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import './FormContainer.css';

function FormContainer() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [message, setMessage] = useState('');
  const [storage, setStorage] = useState('database');
  const [isdisabled, setisdisabled]= useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formData = {
    firstName,
    lastName,
    email,
    phone,
    address,
    zipcode,
    message,
  };

  useEffect(() => {
    if(zipcode.length<6){
      console.log("error");
      setisdisabled(false)
    }else{
      console.log("correct")
      setisdisabled(true);
    };
    
  }, [zipcode])


  const handleSubmit = () => {
    if (storage === 'database') {
      setIsLoading(true);
      fetch('http://localhost:8000/v1/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        console.log(response);
        if(response.ok){
          setIsLoading(false);
          showAlert();
           window.location.reload();
        }
      })
    } else {
      localStorage.setItem('data', JSON.stringify(formData));
      showAlert();
      window.location.reload();
    }
  };

  const handleStorageChange = (e) => {
    setStorage(e.target.value);
  };
  const showAlert=()=>{
    alert("Your details is submitted we will contact you soon");
   
  }

  return (
    <section className="container">
      <div className="wrapper">
        <div className="wrapper__header">
          <h2>Contact Us</h2>
        </div>

        <form className ="form">
          <div className="form__input">
            <InputComponent
              type="text"
              label="First Name"
              placeholder="Enter First Name"
              required
              value={firstName}
              setValue={setFirstName}
            />

            <InputComponent
              type="text"
              label="Last Name"
              placeholder="Enter Last Name"
              required
              value={lastName}
              setValue={setLastName}
            />

            <InputComponent
              type="email"
              label="Email"
              placeholder="Enter Email"
              required
              value={email}
              setValue={setEmail}
            />
            
            <label>Mobile Number</label>
           <PhoneInput
            className= "phone"
            placeholder="Enter your phone number"
            value={phone}
             required
             disabled={phone.length > 12}
            onChange={setPhone}/>
              
                                    

            <InputComponent
              type="number"
              label="Zip Code"
              placeholder="Enter Zipcode"
              required
              value={zipcode}
              disabled={isdisabled}
              setValue={setZipcode}
            />

            <InputComponent
              type="address"
              label="Address"
              placeholder="Enter Address"
              required
              value={address}
              setValue={setAddress}
            />
          </div>
          <div className="form__textarea">
            <TextAreaComponent
              label="Message"
              placeholder="Enter Message"
              value={message}
              setValue={setMessage}
            />
          </div>
          <div className="select">
            <div className="wrapper__header">
              <h2>Storage Medium</h2>
            </div>
            <select
              className="select"
              value={storage}
              name="storage"
              onChange={(e) => handleStorageChange(e)}
            >
              <option key="database" value="database">
                Database
              </option>
              <option key="local" value="local">
                Local Storage
              </option>
            </select>
          </div>

          <div className="button">
            <button
              type="button"
              onClick={handleSubmit}
            >
              {isLoading ? 'Submitting...' : 
              'Submit'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default FormContainer;
