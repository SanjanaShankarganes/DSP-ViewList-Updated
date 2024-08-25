import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const data = [
    { id: 1, idolId: 23489036475858, location: 'Namakkal', place: '@place1', status: 'Completed', date: 'Date 1', type: 'Private' },
    { id: 2, idolId: 123, location: 'Erumapatty', place: '@place2', status: 'Not Completed', date: 'Date 2', type: 'Public' },
    { id: 3, idolId: 345, location: 'Mohanur', place: '@place3', status: 'Completed', date: 'Date 3', type: 'Organisation' },
    { id: 4, idolId: 678, location: 'Sendamangalam', place: '@place4', status: 'Completed', date: 'Date 1', type: 'Private' },
    { id: 5, idolId: 890, location: 'Sengarai', place: '@place5', status: 'Not Completed', date: 'Date 2', type: 'Public' }
  ];

  const filteredData = data.filter(item => 
    (selectedDate === '' || item.date === selectedDate) &&
    (selectedArea === '' || item.location === selectedArea) &&
    (selectedStatus === '' || item.status === selectedStatus) &&
    (selectedType === '' || item.type === selectedType)
  );

  return (
    <div className='my-5 viewDiv'>
      <div className="btn-Div">
        <div className="select-Btn row g-2">
          <div className="col-sm-3">
            <label htmlFor="areaSelect" className="form-label">Police Station</label>
            <select 
              id="areaSelect" 
              className="form-select" 
              aria-label="Sub-Division" 
              value={selectedArea} 
              onChange={(e) => setSelectedArea(e.target.value)}
            >
              <option value="">Select Police Station</option>
              <option value="Namakkal">Namakkal</option>
              <option value="Erumapatty">Erumapatty</option>
              <option value="Mohanur">Mohanur</option>
              <option value="Sendamangalam">Sendamangalam</option>
              <option value="V.V.Nadu">V.V.Nadu</option>
              <option value="Sengarai">Sengarai</option>
              <option value="Puduchatram">Puduchatram</option>
              <option value="Nallipalayam">Nallipalayam</option>
            </select>
          </div>
          <div className="col-sm-3">
            <label htmlFor="statusSelect" className="form-label">Status</label>
            <select 
              id="statusSelect" 
              className="form-select" 
              aria-label="Select Completion Status" 
              value={selectedStatus} 
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="">Select Status</option>
              <option value="Completed">Completed</option>
              <option value="Not Completed">Not Completed</option>
            </select>
          </div>
          <div className="col-sm-3">
            <label htmlFor="typeSelect" className="form-label">Type</label>
            <select 
              id="typeSelect" 
              className="form-select" 
              aria-label="Select Type" 
              value={selectedType} 
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">Select Type</option>
              <option value="Private">Private</option>
              <option value="Public">Public</option>
              <option value="Organisation">Organisation</option>
            </select>
          </div>
          <div className="col-sm-3">
            <label htmlFor="dateSelect" className="form-label">Date</label>
            <select 
              id="dateSelect" 
              className="form-select" 
              aria-label="Select Date" 
              value={selectedDate} 
              onChange={(e) => setSelectedDate(e.target.value)}
            >
              <option value="">Select Date</option>
              <option value="Date 1">Date 1</option>
              <option value="Date 2">Date 2</option>
              <option value="Date 3">Date 3</option>
            </select>
          </div>
        </div>
      </div>

      <div className="tableDiv table-responsive-lg m-5">
        <table className="table table-light table-striped table-hover">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Idol Id</th>
              <th>Location of Installation</th>
              <th>Place of Immersion</th>
              <th>Type</th>
              <th>Date of Immersion</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.idolId}</td>
                <td>{item.location}</td>
                <td>{item.place}</td>
                <td>{item.type}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
