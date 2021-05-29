import React, { useState } from "react";
import { GetHospitalsData } from "../../api/getHospitalsData";
import "./hospitalsList.css";

const HospitalsList = () => {
  const hospitalsData = GetHospitalsData();
  const [searchHospital, setSearchHospital] = useState("");

  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  return (
    <div className="hospital-dashboard">
      <div className="test-message"></div>

      <div className="hospitals-list">
        <div className="hospitals-list-header-component">
          <h3 className="hospitals-list-heading">Covid Help</h3>
          <p>Developed by Tahaan Web Development Team</p>
          <input
            className="hospitals-list-search-box"
            type="text"
            placeholder="Search Hospital, City, Address..."
            onChange={(e) => setSearchHospital(e.target.value)}
          />
        </div>
        {hospitalsData
          .filter((item) => {
            if (searchHospital === " ") {
              return item;
            } else if (
              item.City.toLowerCase().includes(searchHospital.toLowerCase()) ||
              item.Hospital_Name.toLowerCase().includes(
                searchHospital.toLowerCase()
              ) ||
              item.Hospital_Address.toLowerCase().includes(
                searchHospital.toLowerCase()
              )
            ) {
              return item;
            }
            return 0;
          })
          .map((item, key) => {
            return (
              
              <div key={key} class="no-bullets">
                
                <li >City - {item.City}</li>                
                <li className="name">
                  <h4>Name - <span>{item.Hospital_Name}</span></h4>
                  <p> Updated - {currentDate.getDate() === parseInt((item.Timestamp).slice(0, 2)) ? <> {Math.abs(currentHour - parseInt((item.Timestamp).slice(11, 13))) === 0 || Math.abs(currentHour - parseInt((item.Timestamp).slice(11, 13))) === 1 ? <>{"1 hour ago"}</>: <>{Math.abs(currentHour - parseInt((item.Timestamp).slice(11, 13))) + " hours ago"}</>}  </> : <>{ currentDate.getDate() - parseInt((item.Timestamp).slice(0, 2)) === 1 ? <>{currentDate.getDate() - parseInt((item.Timestamp).slice(0, 2)) + " day ago"}</> : <>{currentDate.getDate() - parseInt((item.Timestamp).slice(0, 2)) + " days ago"}</>}</>  }</p>
                </li>
                <li className="address">
                  <h3>
                    Address - <br></br> <span>{item.Hospital_Address}</span>
                  </h3>
                </li>
                <li className="phone">
                  Phone - {" "}
                  <span className="inner">{item.Hospital_Phone_Number}</span>
                </li>
                <li>Bed - {item.Bed_Availability === 'Available' ? <li className="no-bullets_available"> {item.Bed_Availability} </li> : item.Bed_Availability === 'Unavailable' ? <li className="no-bullets_unavailable"> {item.Bed_Availability} </li> : item.Bed_Availability === 'Unknown' ? <li className="no-bullets_unknown"> {item.Bed_Availability} </li> : "-"} </li>
                <li>Oxygen  - {item.Oxygen_Availability === 'Available' ? <li className="no-bullets_available"> {item.Oxygen_Availability} </li> : item.Oxygen_Availability === 'Unavailable' ? <li className="no-bullets_unavailable"> {item.Oxygen_Availability} </li> : item.Oxygen_Availability === 'Unknown' ? <li className="no-bullets_unknown"> {item.Oxygen_Availability} </li> : "-"}</li>
                <li>Ventilator  - {item.Ventilator_Availability === 'Available' ? <li className="no-bullets_available"> {item.Ventilator_Availability} </li> : item.Ventilator_Availability === 'Unavailable' ? <li className="no-bullets_unavailable"> {item.Ventilator_Availability} </li> : item.Ventilator_Availability === 'Unknown' ? <li className="no-bullets_unknown"> {item.Ventilator_Availability} </li> : "-"}</li>
               
                <br />
              </div>
            );
          })}

        <footer>
          <p>
            know more about - <a href="#!"> Tahaan</a>
          </p>
        </footer>

        <div />
      </div>
    </div>
  );
};
export default HospitalsList;
