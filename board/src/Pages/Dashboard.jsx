import React from 'react'
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import './Dashboard.css'
import LineChart from '../Components/LineChart';
import PieChart from '../Components/PieChart';

const Dashboard = () => {
  return (
    <div id='mainB'>
      <div className='section-AX'>
        <h2 id='head'>Board.</h2>

        <div className='listitems'><PieChartOutlineIcon style={{ paddingTop: '15px', paddingRight: '15px' }} /><span>DashBoard</span></div>
        <div className='listitems'><SellOutlinedIcon style={{ paddingTop: '15px', paddingRight: '15px' }} /><span>Transactions</span></div>
        <div className='listitems'><InsertInvitationIcon style={{ paddingTop: '15px', paddingRight: '15px' }} /><span>Schedules</span></div>
        <div className='listitems'><AccountCircleOutlinedIcon style={{ paddingTop: '15px', paddingRight: '15px' }} /><span>Users</span></div>
        <div className='listitems' id='listlast'><SettingsOutlinedIcon style={{ paddingTop: '15px', paddingRight: '15px' }} /><span>Settings</span></div>
        <div className='listitems'><span>Help</span></div>
        <div className='listitems'><span>Contact Us</span></div>


      </div>
      <div className='section-B'>

        <div className='B1'>
          <h1 style={{ marginTop: '0px' }}>DashBoard</h1>
          <div id='B1_sec2'><input id='search' type='text' placeholder='Search...' />
            <NotificationsNoneIcon style={{ fontSize: '30px' }} />
            <img id='profile_pic' src='https://avatars.githubusercontent.com/u/107460762?v=4' alt='pic' /></div>



        </div>



        <div className='B2'>
          <div id='B21'>
            <CreditScoreOutlinedIcon style={{ paddingLeft: '150px', fontSize: '30px' }} />
            <p className='B_para'>Total revenue</p>
            <h2 className='B_head'>$1,129,430</h2>
          </div>
          <div id='B22'>
            <SellOutlinedIcon style={{ paddingLeft: '150px', fontSize: '30px' }} />
            <p className='B_para'>Total Transactions</p>
            <h2 className='B_head'>1,520</h2>
          </div>
          <div id='B23'>
            <ThumbUpOutlinedIcon style={{ paddingLeft: '150px', fontSize: '30px' }} />
            <p className='B_para'>Total Likes</p>
            <h2 className='B_head'>9,721</h2>
          </div>
          <div id='B24'>
            <PeopleAltOutlinedIcon style={{ paddingLeft: '150px', fontSize: '30px' }} />
            <p className='B_para'>Total Users</p>
            <h2 className='B_head'>892</h2>
          </div>

        </div>





        <div className='B3'>
          <LineChart id='chart' />
        </div>






        <div className='B4'>
          <div id='B4_1'>
            <h2 id='prohead'>Top products</h2>
            <div id='B4_1a'>
              <div>
                <PieChart />
              </div>
              <div>
                <div className='pieline'>

                  <h3> <span class="dot1"></span>Basic Tees</h3>
                  <p style={{ color: '#999999' ,paddingLeft:'30px' }}>55%</p>
                </div>
                <div className='pieline'>

                  <h3> <span class="dot2"></span>Customs Short Pants</h3>
                  <p style={{ color: '#999999',paddingLeft:'30px'  }}>31%</p>
                </div>
                <div className='pieline'>

                  <h3> <span class="dot3"></span>Super hoodies</h3>
                  <p style={{ color: '#999999',paddingLeft:'30px'  }}>14%</p>
                </div>
              </div>

            </div>

          </div>



          <div id='B4_2'>
            <h2 id='prohead1'>Today's Schedule</h2>
            <div className='pieline1'>
              <h3 className='prohe' style={{ color: '#666666', fontWeight: '700' }}>Meeting with suppliers from kuta Bali</h3>
              <p style={{ color: '#999999' }}>14:00-15:00</p>
              <p style={{ color: '#999999' }}>At Sunset Road, Kuta,Bali</p>
            </div>
            <div className='pieline2'>
              <h3 className='prohe' style={{ color: '#666666', fontWeight: '700' }}>Check operations at Giga Factory 1</h3>
              <p style={{ color: '#999999' }}>18:00-20:00</p>
              <p style={{ color: '#999999' }}>At Central Jakarta</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard