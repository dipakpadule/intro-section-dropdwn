import logo from './images/logo.svg';
import adown from './images/icon-arrow-down.svg';
import audiophile from './images/client-audiophile.svg';
import databiz from './images/client-databiz.svg';
import maker from './images/client-maker.svg';
import meet from  './images/client-meet.svg';

import todo from './images/icon-todo.svg';
import calendar from './images/icon-calendar.svg';
import reminder from './images/icon-reminders.svg';
import planning from './images/icon-planning.svg';

import './App.scss';
import { useState } from 'react';

function App() {

  const [fdrop, setFdrop] = useState(false);
  const [cdrop, setCdrop] = useState(false);
  const handleFdrop = ()=>{
    setFdrop(!fdrop);
  };
  const handleCdrop = ()=>{
    setCdrop(!cdrop);
  };

  return (
    <article className='intro-section'>
      <nav className='is-navbar'>
        <div className='is-logo'>
          <img src={logo} alt=''/>
          <div  className='dropdown'>
            <a href='/'>Features </a>
            <img onClick={handleFdrop} src={adown} alt=''/>

            <div  className={fdrop ? 'fdrop down':'fdrop'}>
              <ul>
                <li><img src={todo} alt=''/><a href='/'>ToDo list</a></li>
                <li><img src={calendar} alt=''/><a href='/'>Calendar</a></li>
                <li><img src={reminder} alt=''/><a href='/'>Reminders</a></li>
                <li><img src={planning} alt=''/><a href='/'>Planning</a></li>
              </ul>
            </div>
            <a href='/'>Company </a>
            <img onClick={handleCdrop} src={adown} alt=''/>
            <div className={cdrop ? 'cdrop down':'cdrop'}>
              <ul>
                <li><a href='/'>History</a></li>
                <li><a href='/'>Our Team</a></li>
                <li><a href='/'>Blog</a></li>
              </ul>
            </div>
            <a href='/'>Careers</a>
            <a href='/'>About</a>
          </div>
        </div>
        <div className='is-login-btn'>
          <button>Login</button>
          <button id='reg'>Register</button>
        </div>
      </nav>
      <section>
          
      </section>
      <section className='is-main'>
        <section className='is-main-info'>
          <strong><span>Make </span> remote work</strong>
          <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          <button>Learn more</button>
          <div className='clients'>
            <img src={databiz} alt=''/>
            <img src={audiophile} alt=''/>
            <img src={meet} alt=''/>
            <img src={maker} alt=''/>
          </div>
        </section>
        <section className='is-main-bg'>

        </section>
      </section>
    </article>
  );
}

export default App;
