import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import './TherapistsProfile.css'
// import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

// import { createMuiTheme } from '@material-ui/core'


// export const customTheme = createMuiTheme({
// 	palette: {
// 		primary: {
// 			main: 'green',
// 			light:  'red',
// 			dark: 'blue',
// 		},
// 		secondary: {
// 			main: 'purple',
// 		},
// 	},
// })

function AppointmentPicker() {
    const [value, setValue] = React.useState(dayjs('2022-04-07'));
    const color = "green";
    return (
        <div>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        style={{border:"1px solid green"}}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        sx={{
            svg: { color },
            input: { color },
            label: { color },
       
          }}

      />
    </LocalizationProvider>

        </div>
    ); 

}

export default AppointmentPicker