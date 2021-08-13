import './App.css';
import { MdDashboard,
         BsCreditCard,
         BiHelpCircle,
         FiFileText, 
         FiSettings} from 'react-icons/all';

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
                <li className=""><BsCreditCard className="menu-icons" /> <span>Balance sdssddsd</span></li>
                <li className=""><BiHelpCircle className="menu-icons" /> <span>Helddddddp Sut</span></li>
                <li className=""><FiFileText className="menu-icons" /> <span>Invoice</span></li>
                <li className=""><FiSettings className="menu-icons" /> <span>Setting</span></li>
              </ul>
          </div>
          <div className="manu-footer">
              <p>© Duweteroz. Inc 2021</p>
              <p>About | Blog | Privacy | TOS</p>
          </div>
        </div>
        <div className="mean"></div>
    </div>
  );
}

export default App;
