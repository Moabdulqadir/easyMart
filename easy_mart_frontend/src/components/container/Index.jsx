import React, {useState} from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Login from '../Login/Login';
import Singup from '../singup/Singup';

function Index() {
    const paperStyle={padding:20,height:'78vh', width:350, margin:"20px auto"}

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
    return (
        <div style={{marginTop:50}}>
            <Paper elevation={10} style={paperStyle}>
            <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
      <Tab style={{paddingRight:90}} label="Login" />
      <Tab style={{paddingLeft:50}} label="Sing Up" />
    </Tabs>
    <TabPanel value={value} index={0}>
          <Login handleChange={handleChange}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Singup/>
        </TabPanel>
    </Paper>
        </div>
    )
}

export default Index
