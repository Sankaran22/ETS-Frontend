import PropTypes from 'prop-types';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import { Container, Stack } from '@mui/system';
import Iconify from '../../../../components/iconify';




Caselevels.propTypes = {
    Number: PropTypes.string,
    title: PropTypes.string,
    img: PropTypes.number,
    icon: PropTypes.node
};

export default function Caselevels({Number, title, img, icon}) {
    return(
        <Container>
            <Typography 
             sx={{
                fontSize: '26px',
                ml: '-14px',
                mt: '-12px',
                color: '#3D5A80'
                }}>
            {Number}
            {/* <div>
            <Iconify icon={icon}
            />
            </div> */}

            </Typography>
            <Typography 
            sx={{
                mt: '30.6px',
                ml: '-12.4px', 
                fontSize: '13px'
                }}>
            {title}
            </Typography>
            <img 
            style={{
                marginTop: '-64px',
                marginLeft: '120px', 
                width: '52px'}} 
                alt='' 
                src={img || '/assets/icons/navbar/Mask Group 8.svg'} 
                />
        </Container>
    )
}