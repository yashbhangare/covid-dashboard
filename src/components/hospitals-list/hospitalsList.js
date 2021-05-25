import React, { useState } from "react";
import { GetHospitalsData } from "../../api/getHospitalsData";
import "./hospitalsList.css";

const HospitalsList = () => {
  const hospitalsData = GetHospitalsData();
  const [searchHospital, setSearchHospital] = useState("");

  return (

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
                 <li><b>{item.Hospital_Name}</b></li>
                 <li><b>City - </b>{item.City} </li>
                 <li><b>Address -  </b>{item.Hospital_Address}</li>
                 <li><b>Phone Number - </b>{item.Hospital_Phone_Number}</li>
                 <li><b>Bed Availability - </b>{item.Bed_Availability}</li>
                 <li><b>Oxygen Availability - </b>{item.Oxygen_Availability}</li>
                 <li><b>Ventilator Availability - </b>{item.Ventilator_Availability}</li>
                 <li><b>Updated Date - </b>{(item.Timestamp).slice(0, 10)}</li>
                 <li><b>Updated Time - </b>{((item.Timestamp).slice(11, 19))}</li>
                <br />
              </div>
            );
          })}

        <div />

      </div>

  );
};

export default HospitalsList;

