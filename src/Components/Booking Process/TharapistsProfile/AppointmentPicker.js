import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, setOptions } from '@mobiscroll/react';


function AppointmentPicker() {
    return (
        <div>
      <Datepicker
                controls={['calendar', 'time']}
                display="inline"
                calendarType="week"
                calendarSize={2}
            />
        </div>
    ); 

}

export default AppointmentPicker