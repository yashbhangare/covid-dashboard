import React, { useState } from "react";
import { GetHospitalsData } from "../../api/getHospitalsData";
import "./hospitalsList.css";

const HospitalsList = () => {
  const hospitalsData = GetHospitalsData();
  const [searchHospital, setSearchHospital] = useState("");

  return (
    <div className="hospital-dashboard">
      <div className="test-message">
        <b>Note:</b> "hospital" stuff is under test.
      </div>
      <div className="hospitals-list">
        <div className="hospitals-list-header-component">
          <h3 className="hospitals-list-heading">Covid-19 Dashboard</h3>
          <input
            className="hospitals-list-search-box"
            type="text"
            placeholder="Search hospital"
            onChange={(e) => setSearchHospital(e.target.value)}
          />
        </div>
        {hospitalsData
          .filter((item) => {
            if (searchHospital === " ") {
              return item;
            } else if (
              item.City.toLowerCase().includes(searchHospital.toLowerCase()) ||
              item.Hospital_Name.toLowerCase().includes(searchHospital.toLowerCase()) ||
              item.Hospital_Address.toLowerCase().includes(searchHospital.toLowerCase())
            ) {
              return item;
            }
          })
          .map((item, key) => {
            return (
              <div key={key} class="no-bullets">
                <li>Updated Date - {(item.Timestamp).slice(0, 10)}</li>
                <li>Updated Time - {((item.Timestamp).slice(11, 19))}</li>
                <li>City - {item.City} </li>
                <li>Name - {item.Hospital_Name} </li>
                <li>Address - {item.Hospital_Address}</li>
                <li>Phone Number - {item.Hospital_Phone_Number}</li>
                <li>Bed Availability - {item.Bed_Availability}</li>
                <li>Oxygen Availability - {item.Oxygen_Availability}</li>
                <li>Ventilator Availability - {item.Ventilator_Availability}</li>
                <br />
              </div>
            );
          })}

        <div />
        <div className="css-message">Pardon the CSS.</div>
      </div>
    </div>
  );
};

export default HospitalsList;
