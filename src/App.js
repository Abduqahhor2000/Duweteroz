import './App.css';
import { MdDashboard,
         BsCreditCard,
         BiHelpCircle,
         FiFileText, 
         FiSettings,
         BsBell,
         FiSearch,
         GiHamburgerMenu} from 'react-icons/all';
import userImg from "./img/user-image.jpg";


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
                <li className="active-list"><MdDashboard className="menu-icons" /> <span>Dashboard</span></li>
                <li className=""><BsCreditCard className="menu-icons" /> <span>Balance & Card</span></li>
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
          <div>
  apexcharts
          </div>
        </div>
    </div>
  );
}

export default App;
