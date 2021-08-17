import React from "react";
import "../style/home.css";
import { MdDashboard,
    BsCreditCard,
    BiHelpCircle,
    FiFileText, 
    FiSettings,
    BsBell,
    FiSearch,
    GiHamburgerMenu,
   } from 'react-icons/all';
import userImg from "../img/user-image.jpg";
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import routes from '../routes';

export default function Home () {
    return (
       <div className="home">
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
                  <Link className="router-link" to="/home/dashboard"><li className=""><MdDashboard className="menu-icons" /> <span>Dashboard</span></li></Link>
                  <Link className="router-link" to="/home/balance"><li className="active-list"><BsCreditCard className="menu-icons" /> <span>Balance & Card</span></li></Link>
                  <Link className="router-link" to="/home/help"><li className=""><BiHelpCircle className="menu-icons" /> <span>Help & Support</span></li></Link>
                  <Link className="router-link" to="/home/invoice"><li className=""><FiFileText className="menu-icons" /> <span>Invoice</span></li></Link>
                  <Link className="router-link" to="/home/setting"><li className=""><FiSettings className="menu-icons" /> <span>Setting</span></li></Link>
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
          <Redirect to="/home/balance" />
          <Switch>
              {routes.menu.map(item => {
                return(
                  <Route {...item} />
                )
              })}  
          </Switch>
         </div>
       </div>
    );
}