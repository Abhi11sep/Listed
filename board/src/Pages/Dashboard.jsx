import React from 'react'
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './Dashboard.css'
import LineChart from '../Components/LineChart';
import PieChart from '../Components/PieChart';

const Dashboard = () => {
  return (
    <div id='mainB'>
      <div className='section-A'>
        <h2 id='head'>Board.</h2>

        <div className='listitems'><PieChartOutlineIcon /><span>DashBoard</span></div>
        <div className='listitems'><LocalOfferIcon /><span>Transactions</span></div>
        <div className='listitems'><InsertInvitationIcon /><span>Schedules</span></div>
        <div className='listitems'><AccountCircleIcon /><span>Users</span></div>
        <div className='listitems' id='listlast'><SettingsIcon /><span>Settings</span></div>
        <div className='listitems'><span>Help</span></div>
        <div className='listitems'><span>Contact Us</span></div>


      </div>
      <div className='section-B'>

        <div className='B1'>
          <h1>DashBoard</h1>
          <div><input id='search' type='text' placeholder='Search...' />
            <NotificationsNoneIcon />
            <img id='profile_pic' src='https://avatars.githubusercontent.com/u/107460762?v=4' alt='pic' /></div>



        </div>



        <div className='B2'>

        </div>





        <div className='B3'>
          <LineChart />
        </div>






        <div className='B4'>
          <div id='B4_1'>
            <h1 id='prohead'>Top products</h1>
            <div id='B4_1a'>
              <div>
                <PieChart />
              </div>
              <div>
                <div className='pieline'>
                  <h3>Basic Tees</h3>
                  <p>55%</p>
                </div>
                <div className='pieline'>
                  <h3>Customs Short Pants</h3>
                  <p>31%</p>
                </div>
                <div className='pieline'>
                  <h3>Super hoodies</h3>
                  <p>14%</p>
                </div>
              </div>

            </div>

          </div>



          <div id='B4_2'>
          <h1 id='prohead'>Top products</h1>
          <div className='pieline'>
                  <h3>Customs Short Pants</h3>
                  <p>31%</p>
                </div>
                <div className='pieline'>
                  <h3>Super hoodies</h3>
                  <p>14%</p>
                </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard