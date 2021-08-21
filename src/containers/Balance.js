import React from "react";
import Chart from './Chart';
import {FaRegCalendarAlt,
        SiVisa} from 'react-icons/all';
import "../style/balance.css"

export default function Balance() {
  const date = new Date();
  const dateMonth = (date.getMonth() + 1) > 9  ? `${date.getMonth() + 1}` : `0${date.getMonth() + 1}`;
  const dateDate =  date.getDate() > 9  ? `${date.getDate()}` : `0${date.getDate()}`;
  const dateString = `${dateDate}/${dateMonth}/${date.getFullYear()}`;
    return(
        <div className="mean-body">
        <div className="balance-title">
          <h2>Balance & Card</h2>
          <p>See your data</p>
        </div>
        <div className="data-status">
         <div className="balance-details">
           <div className="balance-details-div">
             <span>BALANCE DETAILS</span>
             <button><FaRegCalendarAlt className="calendar-icon" />{dateString}</button>
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
             <button><FaRegCalendarAlt className="calendar-icon" />{dateString}</button>
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
    )
}