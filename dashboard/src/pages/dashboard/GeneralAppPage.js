import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Stack, Button } from '@mui/material';
import Card from '@mui/material/Card';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Tab from '@mui/material/Tab';
import Scrollbar from '../../components/scrollbar';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// _mock_

// components
import { useSettingsContext } from '../../components/settings';
// sections
import CasesStatus from '../../sections/@dashboard/general/AllCases/Cases Status';
import Caselevels from '../../sections/@dashboard/general/AllCases/Caselevels';

// ----------------------------------------------------------------------



export default function GeneralAppPage() {
  const { user } = useAuthContext();

  const theme = useTheme();

  const { themeStretch } = useSettingsContext();

  const STATUS_OPTIONS = ["All Events"]

  return (
    <>
      <Helmet>
        <title> General: App | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
      <>
<Container sx={{display: 'flex', mt: '20px', ml: '-32px', width: '112%'}}>
    <Card sx={{ width: '250%', minHeight: 300, pt: 8.1}}>
    <Tabs
        sx={{
            px: 2,
            mt: '-64.8px',
            minHeight: '30px',
            backgroundColor: '#98C1D9',
          }}
        >
          <Typography sx={{
            pt: 0.5,
            mb: 0,
            font: 'normal normal 600 13px/27px Segoe UI',
             }}>
            Open Cases Events
          </Typography>
       
    </Tabs>
          <Stack>
          {STATUS_OPTIONS.map((tab) => (
            <Tab sx={{pt: 0, textDecoration: 'underline', color: '#000000', pr: '50%'}} key={tab} label={tab} value={tab} />
            ))}
            
            <Grid sx={{width: '12px', mb: '20px', ml: '83%', mt: '-30px', display: 'flex'}}>
            <img style={{marginRight: '6px'}} alt='' src='/assets/icons/navbar/MicrosoftTeams-image (1).png'/>
            <img style={{marginRight: '6px'}} alt='' src='/assets/icons/navbar/MicrosoftTeams-image (2).png'/>
            <img alt='' src='/assets/icons/navbar/MicrosoftTeams-image (4).png'/>
            </Grid>

          </Stack>
            

            

        <CasesStatus
            Number='T005132'
            issues='Bridgestone Bandag breakdown'
            icon='fa-solid:calendar-alt'
            Date='10/21/2022 3:06:16 PM'
            img='/assets/icons/navbar/Icon awesome-user.svg'
            user='Sravan Dasari'
            imgs='/assets/icons/navbar/Icon ionic-md-call.svg'
            phone='0-123-123-123'
            Time='10mins'
        />
        <CasesStatus
            Number='T005132'
            issues='Bridgestone Bandag breakdown'
            icon='fa-solid:calendar-alt'
            Date='10/21/2022 3:06:16 PM'
            img='/assets/icons/navbar/Icon awesome-user.svg'
            user='Sravan Dasari'
            imgs='/assets/icons/navbar/Icon ionic-md-call.svg'
            phone='0-123-123-123'
            Time='10mins'
        />              
     </Card>

     

{/* ------Status------ */}

<Container sx={{mt: '-5px'}}>
{/* -------Open Cases------- */}

    <Card sx={{ width: '95%', minHeight: 100, pt: 2.1, right: -20, mt: 5}}>
        <Caselevels
        Number='10/50'
        icon='material-symbols:arrow-forward-ios'
        title='Open Case'
        img='/assets/icons/navbar/Mask Group 8.svg'
         />
    </Card>

{/* -------Follow Up------- */}

    <Card sx={{ width: '95%', minHeight: 100, pt: 2.1, left: 22, mt: 5}}>
        <Caselevels 
        Number='30/50'
        icon='material-symbols:arrow-forward-ios'
        title='Follow Up'
        img='/assets/icons/navbar/Mask Group 8.svg'
        />
    </Card>
</Container>

{/* -------Dispatched------- */}

<Container sx={{mt: '-5px'}}>
    <Card sx={{ width: '95%', minHeight: 100, pt: 2.1, right: '9px', mt: 5}}>
        <Caselevels
        Number='05/50'
        icon='material-symbols:arrow-forward-ios'
        title='Dispatched'
        img='/assets/icons/navbar/Mask Group 8.svg'
        />
    </Card>

{/* -------Finished------- */}

    <Card sx={{ width: '95%', minHeight: 100, pt: 2.1, left: '-8px', mt: 5}}>
        <Caselevels
        Number='05/50'
        icon='material-symbols:arrow-forward-ios'
        title='Finished'
        img='/assets/icons/navbar/Mask Group 8.svg'
        />
    </Card>
</Container>
</Container>

{/* --------Table--------------- */}

<Container sx={{pt: '25px'}}>
<Card sx={{ width: '109%', minHeight: 420, pt: 8.1, ml: '-33px'}}>
    <Tabs
        sx={{
            pr: 2,
            mt: -8.1,
            minHeight: '30px',
            ml: '-60px',
            backgroundColor: '#98C1D9',
          }}
        >
        <Stack 
        sx={{
            display: 'row',
            ml: '70px',
            mt: '7px',
            height: '18px',
            width: '18px',
            background: '#3D5A80 0% 0% no-repeat padding-box',
            borderRadius: '3px'
        }}>
            <Typography
            sx={{
                color: '#ffffff',
                font: 'normal normal 600 12px/18px Segoe UI',
                ml: '2px',
            }}
            >
                50
            </Typography>
        </Stack>
        <Stack sx={{ml: '6px'}}>
            <Typography sx={{
                font: 'normal normal 600 13px/24px Segoe UI',
                pt: '4px'
            }}>
                 All
            </Typography>
        </Stack>

        <Stack 
        sx={{
            display: 'row',
            mt: '7px',
            ml: '25px',
            height: '18px',
            width: '18px',
            background: '#3D5A80 0% 0% no-repeat padding-box',
            borderRadius: '3px'
        }}>
            <Typography
            sx={{
                color: '#ffffff',
                font: 'normal normal 600 12px/18px Segoe UI',
                ml: '2px',
            }}
            >
                07
            </Typography>
        </Stack>
        <Stack sx={{ml: '6px'}}>
            <Typography sx={{
                font: 'normal normal 600 13px/24px Segoe UI',
                pt: '4px'
            }}>
                 Open Cases
            </Typography>
        </Stack>

        <Stack 
        sx={{
            display: 'row',
            mt: '7px',
            ml: '25px',
            height: '18px',
            width: '18px',
            background: '#3D5A80 0% 0% no-repeat padding-box',
            borderRadius: '3px'
        }}>
            <Typography
            sx={{
                color: '#ffffff',
                font: 'normal normal 600 12px/18px Segoe UI',
                ml: '2px',
            }}
            >
                03
            </Typography>
        </Stack>
        <Stack sx={{ml: '6px'}}>
            <Typography sx={{
                font: 'normal normal 600 13px/24px Segoe UI',
                pt: '4px'
            }}>
                 Flag Cases
            </Typography>
        </Stack>

        <Stack 
        sx={{
            display: 'row',
            mt: '7px',
            ml: '25px',
            height: '18px',
            width: '18px',
            background: '#3D5A80 0% 0% no-repeat padding-box',
            borderRadius: '3px'
        }}>
            <Typography
            sx={{
                color: '#ffffff',
                font: 'normal normal 600 12px/18px Segoe UI',
                ml: '2px',
            }}
            >
                02
            </Typography>
        </Stack>
        <Stack sx={{ml: '6px'}}>
            <Typography sx={{
                font: 'normal normal 600 13px/24px Segoe UI',
                pt: '4px'
            }}>
                 Waiting Cases
            </Typography>
        </Stack>

        <Stack 
        sx={{
            ml: '53%',
            mt: '3px',
            backgroundColor: '#ffffff',
            width: '26px',
            height: '22px',
            borderRadius: '2px',

        }}>
        <img 
        style={{width: '15px', marginTop: '3px', marginLeft: '4px'}}
        alt='' 
        src='/assets/icons/navbar/MicrosoftTeams-image.png' 
        />

        </Stack>
    </Tabs>
<Scrollbar>
    <Stack sx={{mb: '-7px'}}>
        <TableHead>
            <TableRow>
                <TableCell
                sx={{pl: '10px', pt: '11px', font: 'normal normal 600 12px/21px Segoe UI', color: '#000000'}}
                >Incident ID</TableCell>
                <TableCell 
                align="right"
                sx={{font: 'normal normal 600 11px/21px Segoe UI', pt: '10px', pb: '16px', pl: '0px', color: '#000000'}}
                >Quick Note</TableCell>
                <TableCell 
                align="right"
                sx={{pb: '6px', pt: '0px', pl: '2px', font: 'normal normal 600 12px/21px Segoe UI', color: '#000000'}}
                >Status Level</TableCell>
                <TableCell 
                align="right"
                sx={{pt: '10px', pl: '0px', font: 'normal normal 600 12px/21px Segoe UI', color: '#000000'}}
                >Status</TableCell>
                <TableCell 
                align="right"
                sx={{pt: '10px', pl: '0px', font: 'normal normal 600 12px/21px Segoe UI', color: '#000000'}}
                >Down Time Start Date</TableCell>
                <TableCell 
                align="right"
                sx={{pt: '10px', pl: '0px', font: 'normal normal 600 12px/21px Segoe UI', color: '#000000'}}
                >Inbound Program</TableCell>
                <TableCell 
                align="right"
                sx={{pt: '10px', pl: '0px', font: 'normal normal 600 12px/21px Segoe UI', color: '#000000'}}
                >Servicing Dealer</TableCell>
                <TableCell 
                align="right"
                sx={{pt: '10px', pl: '0px', font: 'normal normal 600 12px/21px Segoe UI', color: '#000000'}}
                >Cust Name</TableCell>
                 <TableCell 
                align="right"
                sx={{pt: '10px', pl: '0px', font: 'normal normal 600 12px/21px Segoe UI', color: '#000000'}}
                >Unit #</TableCell>
                <TableCell 
                align="right"
                sx={{pt: '10px', pl: '0px', font: 'normal normal 600 12px/21px Segoe UI', color: '#000000'}}
                >Celler Name</TableCell>
                 <TableCell 
                align="right"
                sx={{pt: '10px', pl: '0px', font: 'normal normal 600 12px/21px Segoe UI', color: '#000000'}}
                >Awiting Dispatched</TableCell>
            
            </TableRow>
        </TableHead>
      </Stack>
    </Scrollbar> 
    
</Card>

</Container>
</>
        {/* <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <AppWelcome
              title={`Welcome back! \n ${user?.displayName}`}
              description="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."
              img={
                <SeoIllustration
                  sx={{
                    p: 3,
                    width: 360,
                    margin: { xs: 'auto', md: 'inherit' },
                  }}
                />
              }
              action={<Button variant="contained">Go Now</Button>}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppFeatured list={_appFeatured} />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Total Active Users"
              percent={2.6}
              total={18765}
              chart={{
                colors: [theme.palette.primary.main],
                series: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Total Installed"
              percent={0.2}
              total={4876}
              chart={{
                colors: [theme.palette.info.main],
                series: [20, 41, 63, 33, 28, 35, 50, 46, 11, 26],
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Total Downloads"
              percent={-0.1}
              total={678}
              chart={{
                colors: [theme.palette.warning.main],
                series: [8, 9, 31, 8, 16, 37, 8, 33, 46, 31],
              }}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentDownload
              title="Current Download"
              chart={{
                colors: [
                  theme.palette.primary.main,
                  theme.palette.info.main,
                  theme.palette.error.main,
                  theme.palette.warning.main,
                ],
                series: [
                  { label: 'Mac', value: 12244 },
                  { label: 'Window', value: 53345 },
                  { label: 'iOS', value: 44313 },
                  { label: 'Android', value: 78343 },
                ],
              }}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppAreaInstalled
              title="Area Installed"
              subheader="(+43%) than last year"
              chart={{
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                series: [
                  {
                    year: '2019',
                    data: [
                      { name: 'Asia', data: [10, 41, 35, 51, 49, 62, 69, 91, 148] },
                      { name: 'America', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
                    ],
                  },
                  {
                    year: '2020',
                    data: [
                      { name: 'Asia', data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
                      { name: 'America', data: [45, 77, 99, 88, 77, 56, 13, 34, 10] },
                    ],
                  },
                ],
              }}
            />
          </Grid>

          <Grid item xs={12} lg={8}>
            <AppNewInvoice
              title="New Invoice"
              tableData={_appInvoices}
              tableLabels={[
                { id: 'id', label: 'Invoice ID' },
                { id: 'category', label: 'Category' },
                { id: 'price', label: 'Price' },
                { id: 'status', label: 'Status' },
                { id: '' },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopRelated title="Top Related Applications" list={_appRelated} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopInstalledCountries title="Top Installed Countries" list={_appInstalled} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopAuthors title="Top Authors" list={_appAuthors} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={3}>
              <AppWidget
                title="Conversion"
                total={38566}
                icon="eva:person-fill"
                chart={{
                  series: 48,
                }}
              />

              <AppWidget
                title="Applications"
                total={55566}
                icon="eva:email-fill"
                color="info"
                chart={{
                  series: 75,
                }}
              />
            </Stack>
          </Grid>
        </Grid> */}
      </Container>
    </>
  );
}
