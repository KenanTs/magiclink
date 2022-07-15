import React, { useState } from 'react';
import "./App.css";
import "./Magic.css";
import {
  BsFillPersonFill, BsHourglassSplit,
  BsGenderAmbiguous, BsFillCompassFill,
  BsFillBriefcaseFill, BsFillAlarmFill,
  BsLightningCharge, BsUnlockFill,
  BsFillLockFill, BsFillMoonFill
} from "react-icons/bs";
import { BiMoviePlay, BiBookBookmark, BiLaptop } from "react-icons/bi";
import { AiFillFund } from "react-icons/ai";
import { IoMailSharp, IoLogoInstagram } from "react-icons/io5";

function Magic() {

  const [ text, setText ] = useState ("@mobile1tdm");
  const change = () => {
    let newTxt = text;
    newTxt === "@mobile1tdm"
      ? setText("tdmmobile9@gmail.com")
      : setText("@mobile1tdm");
  };
  
  return (
    <div className='App'>
      <div className='magic-box'>
        <h2 className='headerMagic'>Magic Card</h2>
        <hr />
        <p><BsFillPersonFill size="14px" color="#252f31" /> <b className='passiveText'>Name: </b>Kenan</p>
        <p><BsHourglassSplit size="14px" color="#252f31" /> <b className='passiveText'>Age: </b>27</p>
        <p><BsGenderAmbiguous size="14px" color="#252f31" /> <b className='passiveText'>Gender: </b>Male</p>
        <p><BsFillCompassFill size="14px" color="#252f31" /> <b className='passiveText'>Location: </b>Turkey</p>
        <p><BsFillBriefcaseFill size="14px" color="#252f31" /> <b className='passiveText'>Job: </b>Frontend Dev.</p>
        <hr />
        <p><BiMoviePlay size="14px" color="#252f31" /> <b className='passiveText'>Last Movie: </b>GoodFellas(1990)</p>
        <p><BiBookBookmark size="14px" color="#252f31" /> <b className='passiveText'>Last Book: </b>The Count of Monte Cristo</p>
        <p><BiLaptop size="14px" color="#252f31" /> <b className='passiveText'>Last TV Show: </b>Chernobyl(2019)</p>
        <p><AiFillFund size="14px" color="#252f31" /> <b className='passiveText'>Hobby: </b>Cinema</p>
      </div>
      

      {/*twitter area*/}
      <div className='center-twitter'>
        <h4 className='headerTwitter'>Twitter</h4>
        <div className='circleRes'>
          <img className='imgTwitter' alt='Profile Pic' src={require('./images/avatar1.png')} />
          <p className='iconPos'><BsFillAlarmFill size="12px" color="white" /> 20:00 - 00:00</p>
          <p className='iconPos2'><BsLightningCharge size="14px" color="#27D959" /> Now Available </p>
          <p className='iconPos3'><BsFillLockFill size="14px" color="#dc143c" /> Private </p>
        </div>
        <p className='activeText'>
          <b className='newActive'>AKTİFLİK: </b>90%
        </p>
        <p className='activeLineTw'></p>
        <a href='https://twitter.com/Mobile1T' rel='noreferrer' target='_blank'>
          <button className='visit-twbutton'>
            <p className='textTw'>Twitter</p>
          </button>
        </a>
      </div>

      {/*linkedin area */}
      <div className='center-linkedin'>
        <h4 className='headerLinkedin'>Linked in</h4>
        <div className='circleLi'>
          <img className='imgLinkedin' alt='Profile Pic' src={require('./images/avatar2.png')} />
          <p className='iconPosLi'><BsFillAlarmFill size="12px" color="white" /> 22:00 - 23:00</p>
          <p className='iconPosLi2'><BsFillMoonFill size="14px" color="#fafad2" /> Offline </p>
          <p className='iconPosLi3'><BsUnlockFill size="14px" color="#ffd700" /> Public </p>
        </div>
        <p className='activeLink'>
          <b className='newActiveLink'>AKTİFLİK: </b>50%
        </p>
        <p className='activeLineLink'></p>
        <a href='https://tr.linkedin.com' rel='noreferrer' target='_blank'>
          <button className='visit-linkbutton'>
            <p className='textLink'>Linkedin</p>
          </button>
        </a>
      </div>

      {/*letterboxd area */}
      <div className='center-letterboxd'>
        <h4 className='headerLetterboxd'>Letterboxd</h4>
        <div className='circleLet'>
          <img className='imgLetterboxd' alt='Profile Pic' src={require('./images/avatar3.png')} />
          <p className='iconPosLet'><BsFillAlarmFill size="12px" color="white" /> 01:00 - 02:00</p>
          <p className='iconPosLet2'><BsFillMoonFill size="14px" color="#fafad2" /> Offline </p>
          <p className='iconPosLet3'><BsUnlockFill size="14px" color="#ffd700" /> Public </p>
        </div>
        <p className='activeLet'>
          <b className='newActiveLet'>AKTİFLİK: </b>70%
        </p>
        <p className='activeLineLet'></p>
        <a href='https://letterboxd.com/nikokag/lists/' rel='noreferrer' target='_blank'>
          <button className='visit-letbutton'>
            <p className='textLet'>Letterboxd</p>
          </button>
        </a>
      </div>

      {/*spotify area */}
      <div className='center-spotify'>
        <h4 className='headerSpotify'>Spotify</h4>
        <div className='circleSpot'>
          <img className='imgSpotify' alt='Profile Pic' src={require('./images/avatar4.png')} />
          <p className='iconPosSpot'><BsFillAlarmFill size="12px" color="white" /> 24/7</p>
          <p className='iconPosSpot2'><BsLightningCharge size="14px" color="#27D959" /> Now Available </p>
          <p className='iconPosSpot3'><BsUnlockFill size="14px" color="#ffd700" /> Public </p>
        </div>
        <p className='activeSpot'>
          <b className='newActiveSpot'>AKTİFLİK: </b>80%
        </p>
        <p className='activeLineSpot'></p>
        <a href='https://open.spotify.com' rel='noreferrer' target='_blank'>
          <button className='visit-spotbutton'>
            <p className='textSpot'>Spotify</p>
          </button>
        </a>
      </div>

      {/*instagram area */}
      <div className='center-instagram'>
        <h4 className='headerInstagram'>Instagram</h4>
        <div className='circleIns'>
          <img className='imgInstagram' alt='Profile Pic' src={require('./images/avatar5.png')} />
          <p className='iconPosInst'><BsFillAlarmFill size="12px" color="white" /> 00:00 -  01:00</p>
          <p className='iconPosInst2'><BsFillMoonFill size="14px" color="#fafad2" /> Offline </p>
          <p className='iconPosInst3'><BsUnlockFill size="14px" color="#ffd700" /> Public </p>
        </div>
        <p className='activeInst'>
          <b className='newActiveInst'>AKTİFLİK: </b>40%
        </p>
        <p className='activeLineInst'></p>
        <a href='https://www.instagram.com/mobile1tdm/' rel='noreferrer' target='_blank'>
          <button className='visit-instbutton'>
            <p className='textInst'>Instagram</p>
          </button>
        </a>
      </div>
    
    <div className='corner-but'>
      <IoMailSharp size="22px" color="wheat" /> <br/>
      <IoLogoInstagram size="22px" color="wheat" />
      <hr/> 
      <p className='stylebuttontxt'>{text}</p>
      <button className='stylebutton' onClick={change}> Contact! </button>
    </div>
    
    </div>
  )
}

export default Magic