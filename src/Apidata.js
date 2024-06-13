import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style/style.css";

const Apidata = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/api/v1/user/new");
        if (Array.isArray(response.data.users)) {
          setdata(response.data.users);
        } else {
          console.error("Data received is not an array:", response.data.users);
          setdata([]);
        }
        console.log(response.data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
        setdata([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {data.map((getdata, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={getdata._id}>
            <div className="boxdiv">
              <p>Name: {getdata.name}</p>
              <p>Role: {getdata.role}</p>
              <p>Email: {getdata.email}</p>
              <p>Gender: {getdata.gender}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apidata;
