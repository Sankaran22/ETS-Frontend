import PropTypes from 'prop-types';
import * as React from 'react';
import Card from '@mui/material/Card';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import { Container } from '@mui/system';
import { Stack, Button, Box } from '@mui/material';
import { prototype } from 'apexcharts';
import Iconify from '../../../../components/iconify';



CasesStatus.propTypes = {
    Number: PropTypes.string,
    issues: PropTypes.string,
    Date: PropTypes.string,
    user: PropTypes.string,
    phone: PropTypes.string,
    Time: PropTypes.string,
    icon: PropTypes.node,
    img: PropTypes.node,
    imag: PropTypes.node,
    icons: prototype.node
};


export default function CasesStatus({Number, issues, Date, user, phone, Time, icon, img, imag, icons }) {
    return(
        <Container>
            <Stack 
            sx={{width: '110%',
            ml: '-22.8px', 
            mt: '-49.6px', 
            direction: 'column',
            pb: '22px'
            }}>
     <Card sx={{ 
         width: '96%',
         height: '82px',
         pt: 2.1, 
         left: 12, 
         mt: 5, 
         borderRadius: '6px'     
     }}>
    <Stack sx={{direction: 'row'}}>
    <Box
      sx={{
        width: 59,
        height: 13,
        backgroundColor: '#E6F8F4',
        border: '1px solid #0D9891',
        borderRadius: '2px',
        marginLeft: '9px',
        marginTop: '-9px',
        marginBottom: '-1px'
      }}
    />
    <Typography sx={{
        font: 'normal normal 600 9px/0px Segoe UI',
        marginTop: '-6px',
        marginLeft: '21px',
        color: '#0D9891'
    }}>
        {Number}
    </Typography>

    <Typography sx={{
            font: 'normal normal 600 11px/8px Segoe UI',
             mt: '-4.4px',
              ml: 10
        }}>
            {issues}
        </Typography>

        <Typography sx={{
             font: 'normal normal 600 11px/10px Segoe UI',
             mt: '-19.6px',
              ml: '370px'

        }}>
        <Iconify icon={icon}
        sx={{
        width: '10px',
         mt: '6px', 
         mb: '-5px', 
         mr: '5px'}} />
        {Date}
        </Typography>
        </Stack>

        <Stack sx={{width: '13px', mt: '20.6px', ml: 1.2, display: 'flex'}}>
            <img
             style={{marginBottom: '7px'}} 
             alt='' 
             src={img || '/assets/icons/navbar/Icon awesome-user.svg'}
             />
            <img
            alt='' 
            src={imag || '/assets/icons/navbar/Icon ionic-md-call.svg'}
            />
        </Stack>
        <Stack sx={{mt: '-36px', mb: '30px', ml: '29px'}}>
            <Typography sx={{font: 'normal normal 600 10px/20px Segoe UI'}}>
                {user}
            </Typography>
            <Typography sx={{font: 'normal normal 600 10px/20px Segoe UI'}}>
                {phone}
            </Typography>
            <Button 
            variant="solid"
            sx={{
                width: '26px',
                marginLeft: '84%',
                height: '27px',
                marginTop: '-38px',
                background: '#FFA304 0% 0% no-repeat padding-box',
                borderRadius: '4px',
                color: '#FFFFFF'
            }}
            >{Time}</Button>
        </Stack>
     </Card>
     </Stack>      
    </Container>
    )
}




