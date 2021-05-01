import React, { useState } from "react";
import { GetStudentsData } from "../../api/getStudentsData";
import "./studentsList.css";

const StudentsList = () => {
  const studentsData = GetStudentsData();
  const [searchStudent, setSearchStudent] = useState("");

  return (
    <div className="student-dashboard">
      <div className="test-message">
        <b>Note:</b> "Student" stuff is for testing it'll be replaced by Covid.
      </div>
      <div className="students-list">
        <div className="students-list-header-component">
          <h3 className="students-list-heading">Student list</h3>
          <input
            className="students-list-search-box"
            type="text"
            placeholder="Search student"
            // value={searchStudent}
            onChange={(e) => setSearchStudent(e.target.value)}
          />
        </div>
        {studentsData
          .filter((item) => {
            if (searchStudent === " ") {
              return item;
            } else if (
              item.Roll_no.toLowerCase().includes(searchStudent.toLowerCase()) || item.Name.toLowerCase().includes(searchStudent.toLowerCase()) || item.Company.toLowerCase().includes(searchStudent.toLowerCase())
            ) {
              return item;
            }
          })
          .map((item, key) => {
            return (
              <div key={key} class="no-bullets">
                <li>Roll no - {item.Roll_no}</li>
                <li> Name - {item.Name} </li>
                <li>Company - {item.Company}</li>

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

export default StudentsList;
