import React, { useState } from "react";
import { GetHospitalsData } from "../../api/getHospitalsData";
import "./hospitalsList.css";

const HospitalsList = () => {
  const hospitalsData = GetHospitalsData();
  const [searchHospital, setSearchHospital] = useState("");
  

  // const updatedTime = () =>{
  //   const currentDate = new Date()
  //   const currentTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
  //   // console.log(currentTime);
  //   hospitalsData.map((item, key)=> {
  //     console.log(item.Timestamp)
  //     console.log(parseInt((item.Timestamp).slice(11, 13)))
  //     parseInt((item.Timestamp).slice(11, 13)) 
  //   }) 
  //   // parseInt((.Timestamp).slice(11, 13))
  // }
  // updatedTime()
  const currentDate = new Date()
  console.log( currentDate.getDate());
  const currentHour = currentDate.getHours()
  console.log(currentHour) ;

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
            return 0;
          })
          .map((item, key) => {
            return (
              <div key={key} className="no-bullets">
                 <li><b>{item.Hospital_Name}</b></li>
                 <li><b>City - </b>{item.City} </li>
                 <li><b>Address -  </b>{item.Hospital_Address}</li>
                 <li><b>Phone Number - </b>{item.Hospital_Phone_Number}</li>
                 <li><b>Bed Availability - </b>{item.Bed_Availability === 'Yes' ? <li className="no-bullets_yes"> {item.Bed_Availability} </li> : item.Bed_Availability === 'No' ? <li className="no-bullets_no"> {item.Bed_Availability} </li> : item.Bed_Availability === 'Unknown' ? <li className="no-bullets_unknown"> {item.Bed_Availability} </li> : "-"} </li>
                 <li><b>Oxygen Availability - </b>{item.Oxygen_Availability === 'Yes' ? <li className="no-bullets_yes"> {item.Oxygen_Availability} </li> : item.Oxygen_Availability === 'No' ? <li className="no-bullets_no"> {item.Oxygen_Availability} </li> : item.Oxygen_Availability === 'Unknown' ? <li className="no-bullets_unknown"> {item.Oxygen_Availability} </li> : "-"}</li>
                 <li><b>Ventilator Availability - </b>{item.Ventilator_Availability === 'Yes' ? <li className="no-bullets_yes"> {item.Ventilator_Availability} </li> : item.Ventilator_Availability === 'No' ? <li className="no-bullets_no"> {item.Ventilator_Availability} </li> : item.Ventilator_Availability === 'Unknown' ? <li className="no-bullets_unknown"> {item.Ventilator_Availability} </li> : "-"}</li>
                 <li><b>Updated Date - </b>{(item.Timestamp).slice(0, 10)}</li>
                 {/* <li><b>Updated Time - </b>{(item.Timestamp).slice(11, 19)}</li> */}
                 <li><b>Updated Time - </b> {currentDate.getDate() === parseInt((item.Timestamp).slice(0, 2)) ? <li> {Math.abs(currentHour - parseInt((item.Timestamp).slice(11, 13))) + " hours ago"}  </li> : <li>{ currentDate.getDate() - parseInt((item.Timestamp).slice(0, 2))}</li>  }</li>
                 {/* <li><b>Updated Time - </b>{updatedTime}</li> */}
                {/* {currentDate.getDate() ===  parseInt((item.Timestamp).slice(0, 2)) } */}
                {/* {Math.abs(currentHour - parseInt((item.Timestamp).slice(11, 13)))} */}
                <br />
              </div>
            );
          })}

        <div />

      </div>

  );
};

export default HospitalsList;

