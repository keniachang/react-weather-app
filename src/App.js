import { GlobalProvider } from './context/GlobalState';

import Header from './components/Header';
import City from './components/City';
import TodayWeather from './components/TodayWeather';
import WeekWeather from './components/WeekWeather';
import Footer from './components/Footer';

import './App.css';

function App() {
    return (
        <GlobalProvider>
            <div className='app'>
                <Header />
                <main>
                    <City />
                    <TodayWeather />
                    <WeekWeather />
                </main>
                <Footer />
            </div>
        </GlobalProvider>
    );
}

export default App;
