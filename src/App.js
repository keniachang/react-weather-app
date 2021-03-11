import Header from './components/Header';
import City from './components/City';
import TodayWeather from './components/TodayWeather';
import WeekWeather from './components/WeekWeather';
import Footer from './components/Footer';

import './App.css';

function App() {
    return (
        <div className='app'>
            <Header />
            <City />
            <TodayWeather />
            <WeekWeather />
            <Footer />
        </div>
    );
}

export default App;
