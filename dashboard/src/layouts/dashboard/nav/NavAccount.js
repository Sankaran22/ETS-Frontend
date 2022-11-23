import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Link, Typography, Stack } from '@mui/material';
// auth
import { useAuthContext } from '../../../auth/useAuthContext';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import { CustomAvatar } from '../../../components/custom-avatar';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1, 2.5),
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

// ----------------------------------------------------------------------

export default function NavAccount() {
  const { user } = useAuthContext();

  return (
    <Link to={PATH_DASHBOARD.user.account} component={RouterLink} underline="none" color="inherit">
    <Stack sx={{mt: '-10px', background: '#E0FBFC 0% 0% no-repeat padding-box'}}>
      <StyledRoot>
        <CustomAvatar sx={{ml: '-15px'}} src="/assets/icons/navbar/User sidenav.svg" alt="photoURL" />

        <Box sx={{ ml: 2, minWidth: 0 }}>
          <Typography variant="subtitle2" noWrap>
            Ross Williams
          </Typography>

          <Typography variant="body2" noWrap sx={{ color: 'text.secondary' }}>
            Admin
          </Typography>
        </Box>
      </StyledRoot>

    </Stack>

    
    </Link>
  );
}
