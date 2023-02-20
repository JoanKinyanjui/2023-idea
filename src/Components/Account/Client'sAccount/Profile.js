import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Service from '../../ServicesPage/Service'
import { BsFillChatDotsFill, BsFillSuitHeartFill } from 'react-icons/bs';
import Badge from '@mui/material/Badge';
import { IoMdSettings } from 'react-icons/io';
import {FaMoneyBillWave} from 'react-icons/fa'
import Favourites from './Favourites';
import Billing from './Billing';
import Settings from './Settings';
import Messages from './Messages';

export default function Profile() {
  return (
    <div className='Profile mx-auto'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='flex items-center py-2'> <p className='px-2'> <Badge badgeContent={2} color="primary"><BsFillChatDotsFill  className='text-green-600 text-xl  mx-auto' /> </Badge></p>Messages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
<Messages />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='flex items-center py-2' ><p className='px-2'><BsFillSuitHeartFill className='text-green-600 text-xl mx-auto' /></p>Favourites</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Favourites />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='flex items-center py-2'  ><p className='px-2'><FaMoneyBillWave className='text-green-600 text-xl mx-auto' /></p>Billing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
<Billing />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='flex items-center py-2' > <p className='px-2'><IoMdSettings  className='text-green-600 text-xl  mx-auto' /></p>Settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
<Settings />
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}