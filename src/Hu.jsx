import React from 'react';
import "./Navbar.css";
function Hu() {
  return (
    <>
      <div className="all">
        <div className="logo"><img src="https://mail.google.com/mail/u/0?ui=2&ik=dcf00b7e10&attid=0.1&permmsgid=msg-a:r4060762486000360842&th=17a58a2201ad1ce9&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ9AQyio2UUdQnep23V1yRfwKpIR8-j3FgI6Yb1gYjoxReu5_vTDH1D7sjy9FKDtFgToZthF-M0YodWbToi9J2m6hedpbH8AloQzsk6AqNwZQGcnYb1iRuK4LOg&disp=emb&realattid=ii_kqi9wfz60" />
        </div>
        <div className="Navbar">
        <i class='bx bx-search  scan'></i>

          <div className="righSide">
            <input type="search" placeholder="Find cources,class,test series..."style={{'borderRadius':'4px'}} />
          </div>

          <div className="ONE">
            <i class="fas fa-bars"></i>
            <ul className="luke" type="none" >

              <li ><a className="main " href="">Study Material&nbsp;</a>
              <i className='bx bxs-chevron-down-circle dropicon' ></i>
                <div className="bhu">
                  <ul className="DropDownMenu  " type="none">
                    <li className="man">CBSE<i class='bx bxs-chevron-right to1 '></i>
                      <div className="wi">
                        <ul className="SubDropDownMenu1" type="none">
                          <li>Class 6</li>
                          <li>Class 7</li>
                          <li>Class 8</li>
                          <li>Class 9</li>
                          <li>Class 10</li>
                          <li>Class 11</li>
                          <li>Class 12</li>

                        </ul>
                      </div>
                    </li>
                    <li className="man">ICSE<i class='bx bxs-chevron-right to2'></i>
                      <div className="wi">
                        <ul className="SubDropDownMenu2" type="none">
                          <li>Class 6</li>
                          <li>Class 7</li>
                          <li>Class 8</li>
                          <li>Class 9</li>
                          <li>Class 10</li>
                          <li>Class 11</li>
                          <li>Class 12</li>

                        </ul>
                      </div>
                    </li>
                    <li className="man">JEE<i class='bx bxs-chevron-right to3'></i>
                      <div className="wi">
                        <ul className="SubDropDownMenu3" type="none">

                          <li>Class 11</li>
                          <li>Class 12</li>
                          <li>JEE  Advance</li>
                        </ul>
                      </div>
                    </li>
                    <li className="man">NEET<i class='bx bxs-chevron-right to4'></i>
                      <div className="wi">
                        <ul className="SubDropDownMenu4" type="none">

                          <li>Class 11</li>
                          <li>Class 12</li>

                        </ul>
                      </div>
                    </li>
                    <li className="man">NCERT<i class='bx bxs-chevron-right to5'></i>
                      <div className="wi">
                        <ul className="SubDropDownMenu5" type="none">
                          <li>Class 6</li>
                          <li>Class 7</li>
                          <li>Class 8</li>
                          <li>Class 9</li>
                          <li>Class 10</li>
                          <li>Class 11</li>
                          <li>Class 12</li>

                        </ul>
                      </div>
                    </li>
                    <li className="man">ONLINE TUTION<i class='bx bxs-chevron-right to6'></i>
                      <div className="wi">
                        <ul className="SubDropDownMenu6" type="none">
                          <li>Class 11</li>
                          <li>Class 12</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="two">
            <ul type="none" >
              <li><a className="main " href="">Explore Courses&nbsp;</a><i class='bx bxs-chevron-down-circle dropicon' ></i>
              </li>
            </ul>
          </div>
          <div className="three">
            <ul type="none" >
              <li><a className="main " href="">Ask a question</a></li>
            </ul>
          </div>
        </div>
      </div>
      
    </>
  )
}
export default Hu;
