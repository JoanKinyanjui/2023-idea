import React, { useState } from 'react';
import BookingNavbar from '../BookingNavbar/BookingNavbar';
import './AssessmentPage.css';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { useNavigate } from 'react-router-dom';

const steps = [

  {
    label: 'What therapist do you prefer?',
    question_1:`Male`,
    question_2:`Female`,
    question_3:`No preference`,
    question_4:`Comfortable with any`
  },
  {
    label: 'Tell us Why you are looking for help today',
    question_1:`I'm feeling anxious or panicky`,
    question_2:`I've been having trouble sleeping` ,
    question_3:`A traumatic experience` ,  
    question_4:`something else`
  },
  {
    label: 'How would you rate your physical health ?',
    question_1:`Excellent`,
    question_2:`Good` ,
    question_3:`Fair` ,  
    question_4:`Poor`
  },
];


function AssessmentPage() {
  const [show,setShow]= useState(false)
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const navigate= useNavigate();
  const showComponent = () => {
   async function ShowingComponent(){
    await setShow(true);
    const myTimeout = setTimeout(() =>{
            navigate("/proposedTherapists")
            console.log('Hae we navigated')
    },5000)
   }


   ShowingComponent();
  };
// Styling

// const useStyles = makeStyles(() => ({
//   rooty: {
//     "& .MuiStepIcon-active": { color: "red" },
//     "& .MuiStepIcon-completed": { color: "green" },
//     "& .Mui-disabled .MuiStepIcon-root": { color: "cyan" }
//   }
// }));

// const c = useStyles();

  return (
    <div>
<BookingNavbar />
<div className='AssessmentPage'>
  <div className='w-screen flex place-content-center'>
    <p className='w-5/6 md:w-3/4 text-lg  md:text-xl font-semibold pt-4 pb-8 ' >To begin ,Fill the brief assessment below so we can match you w ith the right therapists for you to choose from .</p>
  </div>
<div className='flex place-content-center'>
<Box sx={{ maxWidth: 600 }}>
      <Stepper activeStep={activeStep} orientation="vertical" >
        {steps.map((step, index) => (
          <Step key={step.label} 
          sx={{
            '& .MuiStepLabel-root .Mui-completed': {
              color: 'green', // circle color (COMPLETED)
            },
            '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
              {
                color: 'grey.500', // Just text label (COMPLETED)
              },
            '& .MuiStepLabel-root .Mui-active': {
              color: 'grey', // circle color (ACTIVE)
            },
            '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
              {
                color: 'blue', // Just text label (ACTIVE)
              },
            '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
              fill: 'white', // circle's number (ACTIVE)
            },
          }}>
            <StepLabel
            >
              {step.label}
            </StepLabel>
            <StepContent className='assessment-questions text-slate-700'>
              <Typography> <input type="checkbox" id="topping" name="topping" value="Paneer"  className='mx-1 md:mx-2' />{step.question_1}</Typography>
              <Typography>  <input type="checkbox" id="topping" name="topping" value="Paneer" className='mx-1 md:mx-2' />{step.question_2}</Typography>
              <Typography>  <input type="checkbox" id="topping" name="topping" value="Paneer" className='mx-1 md:mx-2' />{step.question_3}</Typography>
              <Typography>  <input type="checkbox" id="topping" name="topping" value="Paneer"  className='mx-1 md:mx-2'/>{step.question_4}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    style={{backgroundColor:'green'}}
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                    style={{color:'green'}}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }} style={{color:"white", fontSize:'12px',textTransform:'capitalize',backgroundColor:"gray" }}>
            Re-answer
          </Button>
          <Button onClick={showComponent} sx={{ mt: 1, mr: 1 }} style={{color:"white", fontSize:'12px',textTransform:'capitalize',backgroundColor:"gray"}}>
           Submit
          </Button>
        </Paper>
      )}
    </Box>
</div>

</div>
<div>

{show ?  <LinearProgress  color='success' className='mt-8'/>  : ''}
</div>
    </div>
  )
}

export default AssessmentPage;