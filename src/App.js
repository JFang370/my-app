import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { createTheme, ListItem, AppBar, Toolbar, Box, Container, Typography,
          Button, ButtonGroup, Grid, List, Avatar, ListItemText, ListItemAvatar, 
           Paper, ThemeProvider, Card, CardMedia, CardContent, CardActionArea} from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="appointment"/>
          <Route path="reviews"/>
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
function Layout() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <AppBar>
          <Toolbar>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={3} md={5} lg={5} xl={6} sx={{ mt:{xs:0, sm:0, md:1, lg:0}}}>
                <Container><Typography variant='h6'>Jommy's Optical</Typography></Container>
              </Grid>
              <Grid item xs={6} sm={0} md={5} lg={6} xl={6} sx={{ml:{xs:5, sm:0, md:0, lg:0}}}>
              <ButtonGroup color='secondary' variant='none'>
                  <Link style={{ textDecoration: 'none', color: 'white'}} to='/home'>
                    <Button color='inherit' textDecoration='none'>Home</Button>
                  </Link>
                  <Link style={{ textDecoration: 'none', color: 'white'}} to='/about'>
                    <Button color='inherit' textDecoration='none'>About Us</Button>
                  </Link>
                  <Link style={{ textDecoration: 'none', color: 'white'}} to='/'>
                    <Button onClick={handleClickOpen} color='inherit' textDecoration='none'>Book an Appointment</Button>
                  </Link>
                  <Link style={{ textDecoration: 'none', color: 'white'}} to='/'>
                    <Button onClick={handleClickOpen} color='inherit' textDecoration='none'>Reviews</Button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"Warning"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          We use external services to assist us in our work. By continuing 
                          you you will be sent to a website outside of Jommy's Optical.
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}>Disagree</Button>
                        <Button onClick={handleClose} autoFocus>
                          Agree
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </Link>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}

function Home(){
  const theme = createTheme({
      typography: {
        h5: {fontSize: '1rem',},
        h6: {fontSize: '1rem', fontFamily:'roboto',},
        body4: undefined,
        body5: undefined,
    },
  }
  );
  return (
    <Box>
      <Box sx={{
        height:{xs:600},
        backgroundImage:'url(https://www.myeyedr.com/sites/default/files/styles/x_large_hq/public/image/2023-01/EYE%20EXAM_FAMILY_OPT%202.jpg?itok=lWPJ38Ip)',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
      }}>
        <Grid container spacing={3}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={1} xl={0.5}></Grid>
          <Grid item xs={10}>
            <Container>
              <Paper elevation='10' sx={{ height:{xs:400,}, width:{xs:400,}}}> 
              <Typography variant='h3' sx={{p:3}}>Contact Us!</Typography>
               <Container>
               <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <EmailIcon />
                    </Avatar>
                    </ListItemAvatar>
                  <ListItemText primary="Email  " secondary="PracticeName@gmail.com" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LocalPhoneIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Phone " secondary="917-237-5555" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                      <Avatar>
                        <LocationOnIcon />
                      </Avatar>
                    </ListItemAvatar>
                   <ListItemText primary="Address" secondary="139 Centre Street, Suite 407, New York, NY 10013" />
                  </ListItem>
                </List>
               </Container>
              </Paper>
            </Container>
          </Grid>
        </Grid>
        </Box>
        <Box>
          <Grid container spacing={3} sx={{backgroundColor:'#F0FFFF'}}>
            <Grid item xs={12} sx={{backgroundColor:'#89CFF0'}}>
              <Box sx={{width:'auto', height:'50px',}}></Box>
            </Grid>
            <Grid container spacing={0} item xs={2}></Grid>
            <Grid item xs={12} lg={4}>
            <Container sx={{backgroundColor:'#87CEEB	', height:'460px',}}>
              <Grid container spacing={2}>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12} sx={{display:'flex', alignItems:'center',}}>
                <Typography>
                Welcome! The team at Jommy's Optical strives to provide the best optometry services.
                We invite you to browse our website and learn more about our work and to join our family.
                Jommy's Optical is a full service eye and vision care provider. Dr. Jommy and the team are
                dedicated to keeping our patients comfortable and informed.   
              </Typography>
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid>
                  <Grid item xs={12}></Grid>

                <Grid item xs={6}>
                  <Container sx={{backgroundColor:'#000080'}}>
                <Link style={{ textDecoration: 'none', color: 'white'}} to='/appointment'>
                    <Button color='inherit' textDecoration='none'>Book Appointment</Button>
                  </Link>
                  </Container>
                </Grid>
                <Grid item xs={6}>
                  <Container sx={{backgroundColor:'#000080'}}>
                <Link style={{ textDecoration: 'none', color: 'white'}} to='/about'>
                    <Button color='inherit' textDecoration='none'>About Us</Button>
                  </Link>
                  </Container>
                </Grid>
              </Grid>
            </Container>
            </Grid>
            <Grid item xs={12} lg={4}>
              <ThemeProvider theme={theme}>
              <Container sx={{mb:3, }}>
                <Paper elevation='5'>
                <TableContainer>
                <Table sx={{}}>
                <TableHead>
                  <TableRow>
                    <TableCell><Typography variant='h6'>Days</Typography></TableCell>
                    <TableCell><Typography variant='h6'>Hours</Typography></TableCell>
                  </TableRow>
                </TableHead> 
                <TableBody>
                  <TableRow>
                    <TableCell><Typography variant='h5'>Monday</Typography></TableCell>
                    <TableCell><Typography variant='h5'>8:00 AM - 6:00PM</Typography></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><Typography variant='h5'>Tuesday</Typography></TableCell>
                    <TableCell><Typography variant='h5'>8:00 AM - 6:00PM</Typography></TableCell>
                  </TableRow> 
                  <TableRow>
                    <TableCell><Typography variant='h5'>Wednesday</Typography></TableCell>
                    <TableCell><Typography variant='h5'>8:00 AM - 6:00PM</Typography></TableCell>
                  </TableRow> 
                  <TableRow>
                    <TableCell><Typography variant='h5'>Thursday</Typography></TableCell>
                    <TableCell><Typography variant='h5'>8:00 AM - 6:00PM</Typography></TableCell>
                  </TableRow> 
                  <TableRow>
                    <TableCell><Typography variant='h5'>Friday</Typography></TableCell>
                    <TableCell><Typography variant='h5'>8:00 AM - 6:00PM</Typography></TableCell>
                  </TableRow> 
                  <TableRow>
                    <TableCell><Typography variant='h5'>Saturday</Typography></TableCell>
                    <TableCell><Typography variant='h5'>8:00 AM - 6:00PM</Typography></TableCell>
                  </TableRow> 
                  <TableRow>
                    <TableCell><Typography variant='h5'>Sunday</Typography></TableCell>
                    <TableCell><Typography variant='h5'>8:00 AM - 6:00PM</Typography></TableCell>
                  </TableRow> 
                </TableBody> 
                </Table>
              </TableContainer>
                </Paper>
              </Container>
              </ThemeProvider>
            </Grid>
          </Grid>
        </Box>
      </Box>
  );
}

function About(){
  const theme = createTheme({
    palette: {
      customBackground1:{
        dark: '#404a86',
        light: '#7c88cc',
        main: '#5c6bc0',
        contrastText: '#000',
      },
      typography: {
        h5: 'roboto',
        h6: undefined,
        body4: undefined,
        body5: undefined,
      },
    },

  })
  return( 
    <ThemeProvider theme={theme}>
      <Box sx={{
        pt:2,
        ml:{xs:3},
        display:'grid',
        gridTemplateRows: 'repeat(5, 120px)',
        backgroundColor:'#F9F9FB',
      }}>
        <Grid container spacing={0}sx={{
          gridRow: '2',
        }}>
          <Grid item xs={1.4} sm={1.5} md={1.7} xl={2.7}>  
          </Grid>
          <Grid item xs={4.2} md={3}>
            <Paper elevation='6' sx={{
              backgroundColor:'customBackground1.dark',
              width:{ xs: 350, sm: 425, md: 450, lg: 450, xl: 450,},
              height:{ xs: 350, sm: 425, md: 450, lg: 450, xl: 450, },
            }}></Paper>
          </Grid>
          <Grid item xs={3} md={3} lg={3} xl={1}></Grid>
          <Grid item xs={4}>
            <Paper elevation='10' sx={{
              width:{xs:'375px', sm:'490px', md:'270px', xl:'450px'},
              p:2, m:3,
            }}>
              <Typography variant='h4'>About Us</Typography>
              <Typography>
              The staff members at Jommy's Optical are professional and welcoming. Our aim is to put the patients first.
              We strive to provide exceptional customer service to all of our patients. For each patient, we make sure the 
              experience is comfortable and enjoyable.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={0} sx={{
          pt:10,
          gridRow: '1',
        }}>
          <Grid item xs={2.5} md={1} xl={3} ></Grid>
          <Grid item xs={3.5}>
            <Paper sx={{
              backgroundImage:'url(https://www.reviewofoptometry.com/CMSImagesContent/2019/11/officedesignart9-modal.jpg)',
              backgroundSize:'cover',
              backgroundColor:'customBackground1.main',
              width:{ xs: 350, sm: 425, md: 450, lg: 450, xl: 450,},
              height:{ xs: 350, sm: 425, md: 450, lg: 450, xl: 450, },
            }}></Paper>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{backgroundColor:'#F0FFFF', pt:{xs:10, md:0}, pb:{xs:10, md:0, lg:5,},}}>
        <Grid container spacing={5} sx={{mt:{xs:9, md:0,}}}>
            <Grid item xs={12} sx={{backgroundColor:'#FFF0F0',}}></Grid>
            <Grid item xs={12} md={1.5} lg={1} xl={2.2} sx={{}}></Grid>
            <Grid item xs={10} md={2} lg={2.1} sx={{ml:{xs:9}}}>
            <Card sx={{ width:{xs:'350px', sm:'450px', md:'550px', lg:'400px'} }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://www.medicalartseye.com/images/blog/Image_2.jpg"
                  imageFit='cover'
                  alt="green iguana"
                  />
                   <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Dr. Jhonny Jommy
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Dr. Jommy founded Jommy's Optics with the purpose of providing excellent care to the people. He has over 20 years of experience in the field.
                  Dr. Jommy received his degree from the Yale University and has worked with countless experts. He is certified by the National Board of Examiners of Optometry as well as 
                  by the New York State Board of Optometry.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={0} lg={2}></Grid>
            <Grid item xs={10} md={2} lg={2.1} sx={{ml:{xs:9}}}>
            <Card sx={{ width:{xs:'350px', sm:'450px', md:'550px', lg:'400px'} }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://www.clearfinityeyecare.com/wp-content/uploads/2018/11/Eye-Doctor.jpg"
                  alt="green iguana"
                  />
                   <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Dr.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Dr. Jenner has almost two decades of experience in ophthalmic surgery and specializes in corneal transplantation and laser eye surgery.
                   She graduated cum laude from the University of Michigan and is one of the most distinguished Optometrist in New York. Dr. Jenner is certified by the National 
                   Board of Examiners of Optometry and by the New York State Board of Optometry
                  </Typography>
                </CardContent>
              </Card>
            </Grid> 
            <Grid item xs={12}></Grid>
            <Grid item xs={12} md={1.5} lg={1} xl={2.2}></Grid>
            <Grid item xs={10} md={2} lg={2.1} sx={{ml:{xs:9}}}>
            <Card sx={{ width:{xs:'350px', sm:'450px', md:'550px', lg:'400px'} }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://myvision.org/wp-content/uploads/2022/03/eye-doctor-in-office.jpg"
                  alt="green iguana"
                  />
                   <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Dr. Peter Griffin
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Dr. Griffin is a new addition to the team, but has been working in the optometry field for 13 years and is a leading expert. 
                  He has shown remarkable results and provided patients with excellent service. He is well regarded for his quality and patient-centered
                  care. He has received numerous accolades for the work he has provided.
                
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={0} lg={2}></Grid>
            <Grid item xs={10} md={2} lg={2.1} sx={{ml:{xs:9}}}>
            <Card sx={{ width:{xs:'350px', sm:'450px', md:'550px', lg:'400px'} }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://www.optometrists.org/wp-content/uploads/2020/10/optometrist-caucasian-od-big-1024x682-1.jpg"
                  alt="green iguana"
                  />
                   <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Dr. Jonathan Smith
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Dr. Smith received his undergraduate degree from New York University and has been practicing at Jommy's Optics since 2007. Dr. Smith has worked
                  in various Optometry settings and with many of the brightest in the field. He is certified by the National Board of Examiners of Optometry as well as by 
                  the New York State Board of Optometry. Dr. Smith takes pride in caring for his patients.  
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
