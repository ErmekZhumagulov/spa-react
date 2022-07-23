import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Yandex_Zen_logo_icon.svg" alt="logo" />
      </header>
      <nav className='nav'>
        <ul>
          <li>
            <a href='#'>Profile</a>
          </li>
          <li>
            <a href='#'>Messages</a>
          </li>
          <li>
            <a href='#'>News</a>
          </li>
          <li>
            <a href='#'>Music</a>
          </li>
          <li>
            <a href='#'>Settings</a>
          </li>
        </ul>
      </nav>
      <div className='content'>
        <div>
          <div>
            <img src="https://www.popsci.com/uploads/2020/06/05/3NIEQB3SFVCMNHH6MHZ42FO6PA.jpg" alt="profile-background" />
          </div>
          ava + desc
        </div>
        <div>
          my posts
          <div>
            new post
          </div>
        </div>
        <div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
