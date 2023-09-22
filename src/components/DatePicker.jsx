import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function MyDatePicker() {
    const [selectedDate, setSelectedDate] = useState(null);
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    return (
      <div className='date-picker' >
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
        //   isClearable 
          customInput={
            <div className="date-picker-custom-input">
              <input
                type="text"
                value={selectedDate ? selectedDate.toLocaleDateString() : ""}
                readOnly
                placeholder="Date"
              />
            
            </div>
          }
        />
        {/* {selectedDate && (
          <p>{selectedDate.toLocaleDateString()}</p>
        )} */}
      </div>
    );
  }
  
  export default MyDatePicker;
  