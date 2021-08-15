import './App.css';
import { MdDashboard,
         BsCreditCard,
         BiHelpCircle,
         FiFileText, 
         FiSettings,
         BsBell,
         FiSearch,
         GiHamburgerMenu,
         FaRegCalendarAlt,
         SiVisa} from 'react-icons/all';
import userImg from "./img/user-image.jpg";
import Chart from './containers/chart';

function App() {
  return (
    <div className="App">
        <div className="menu">
          <div className="brand"> 
            <span>
              <div></div>
              <div></div>
            </span>
            <h2>Duweteroz</h2>
          </div>
          <div className="menu-list">
              <ul>
                <li className=""><MdDashboard className="menu-icons" /> <span>Dashboard</span></li>
                <li className="active-list"><BsCreditCard className="menu-icons" /> <span>Balance & Card</span></li>
                <li className=""><BiHelpCircle className="menu-icons" /> <span>Help & Support</span></li>
                <li className=""><FiFileText className="menu-icons" /> <span>Invoice</span></li>
                <li className=""><FiSettings className="menu-icons" /> <span>Setting</span></li>
              </ul>
          </div>
          <div className="manu-footer">
              <div>© Duweteroz. Inc 2021</div>           
              <div className="free-link">
                <div>About</div>
                <div>Blog</div> 
                <div>Privacy</div>
                <div>TOS</div>
              </div>
          </div>
        </div>
        <div className="mean">
          <div className="mean-header">
            <div className="search">
              <div>
                <GiHamburgerMenu />
              </div>
              <span>
                <FiSearch />
              </span>
              <input type="text" placeholder="Search something..."/>
            </div>
            <div className="user-panel">
              <div className="bell-icon">
                <BsBell />
              </div>
              <div className="user-info">
                <img src={userImg} className="user-image" alt=""></img>
                <div className="user-name">
                  <p>Abduqahhor Norimmatov</p>
                  <p>Admin</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mean-body">
             <div className="balance-title">
               <h2>Balance & Card</h2>
               <p>See your data</p>
             </div>
             <div className="data-status">
              <div className="balance-details">
                <div className="balance-details-div">
                  <span>BALANCE DETAILS</span>
                  <button><FaRegCalendarAlt className="calendar-icon" />18/09/2021</button>
                </div>
                <div className="total-balance">
                  <p>Total balance</p>
                  <span>$528,182</span>
                </div>
                <div className="other-total">
                  <div>
                       <p>Last Month</p>
                       <h3>$342,182</h3>
                  </div>
                  <div>
                       <p>Expenses</p>
                       <h3>$342,182</h3>
                  </div>
                  <div>
                       <p>Taxes</p>
                       <h3>$342,182</h3>
                  </div>
                  <div>
                       <p>Debit</p>
                       <h3>$342,182</h3>
                  </div>
                </div>
              </div>
              <div className="bills">
                <div className="bills-div">
                  <span>BILLS</span>
                  <button><FaRegCalendarAlt className="calendar-icon" />18/09/2021</button>
                </div>
                  <p className="bills-p">You have 56 unpaid bills this month, Pay immediately before it's too late</p>
                <div className="will-pay">
                  <div>
                    <p style={{color: "red"}}>Netflix</p>
                    <span>$14.00</span>
                  </div>
                  <div>
                    <button>Pay Now</button>
                  </div>
                </div>
                <div className="will-pay">
                  <div>
                    <p style={{color: "green"}}>Spotify</p>
                    <span>$15.00</span>
                  </div>
                  <div>
                    <button>Pay Now</button>
                  </div>
                </div>
                <span>See All Bills</span>
              </div>
              <div className="investment">
                <span>INVESTMENT</span>
                <div className="investment-balance">
                   <h3>$528,182</h3>
                   <span>+$621.26 (8.21%)</span>
                </div> 
                <div id="chart">
                  <Chart />
                </div>    
              </div>
             </div>
             <div className="cards">
               <h4>YOUR CARDS</h4>
                <div className="your-cards">
                  <div className="your-card lite-blue">
                    <div>
                      <p>Debit Card</p> 
                      <span><SiVisa /></span>
                    </div>
                    <div>
                      <h3>9600 &nbsp; **** &nbsp; 2314 &nbsp; 1611</h3>
                      <p>2878</p>
                    </div>
                    <div>
                      <div className="card-name">Abduqahhor Norimmatov</div>
                      <div className="card-date">
                       <span>GOOD <br/>THRU</span>
                       <b>17/27</b>
                       <span className="visa-logo">
                       </span>
                      </div>
                    </div>
                  </div>
                  <div className="your-card dark-blue">
                    <div>
                      <p>Debit Card</p> 
                      <span><SiVisa /></span>
                    </div>
                    <div>
                      <h3>9600 &nbsp; **** &nbsp; 2314 &nbsp; 1611</h3>
                      <p>2878</p>
                    </div>
                    <div>
                      <div className="card-name">Abduqahhor Norimmatov</div>
                      <div className="card-date">
                       <span>GOOD <br/>THRU</span>
                       <b>17/27</b>
                       <span className="visa-logo">
                       </span>
                      </div>
                    </div>
                  </div>
                  <div className="your-card lite-green">
                    <div>
                      <p>Debit Card</p> 
                      <span><SiVisa /></span>
                    </div>
                    <div>
                      <h3>9600 &nbsp; **** &nbsp; 2314 &nbsp; 1611</h3>
                      <p>2878</p>
                    </div>
                    <div>
                      <div className="card-name">Abduqahhor Norimmatov</div>
                      <div className="card-date">
                       <span>GOOD <br/>THRU</span>
                       <b>17/27</b>
                       <span className="visa-logo">
                       </span>
                      </div>
                    </div>
                  </div>
                  <div className="your-card lite-red">
                    <div>
                      <p>Debit Card</p> 
                      <span><SiVisa /></span>
                    </div>
                    <div>
                      <h3>9600 &nbsp; **** &nbsp; 2314 &nbsp; 1611</h3>
                      <p>2878</p>
                    </div>
                    <div>
                      <div className="card-name">Abduqahhor Norimmatov</div>
                      <div className="card-date">
                       <span>GOOD <br/>THRU</span>
                       <b>17/27</b>
                       <span className="visa-logo">
                       </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  );
}

export default App;
