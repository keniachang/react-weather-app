import { useRef, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import Hourly from './Hourly';

const TodayWeather = () => {
    const { data } = useContext(GlobalContext);

    // drag to scroll
    // const slider = document.querySelector('.today-slider');
    const sliderRef = useRef();
    let pos = { left: 0, x: 0 };
    const mouseDown = (e) => {
        const slider = sliderRef.current;
        slider.style.cursor = 'grabbing';
        slider.style.userSelect = 'none';
        pos = { left: slider.scrollLeft, x: e.clientX };

        slider.addEventListener('mousemove', mouseMove);
    };

    const mouseMove = (e) => {
        const slider = sliderRef.current;
        const dx = e.clientX - pos.x;
        slider.scrollLeft = pos.left - dx;
    };

    const mouseUp = (e) => {
        const slider = sliderRef.current;
        slider.removeEventListener('mousemove', mouseMove);
        slider.style.cursor = 'grab';
        slider.style.removeProperty('user-select');
    };

    return (
        <section
            ref={sliderRef}
            className='today-slider'
            onMouseDown={mouseDown}
            onMouseUp={mouseUp}
        >
            {data.hourly.length ? (
                data.hourly.slice(0, 12).map((hour) => (<Hourly key={hour.dt} hour={hour} />))
                ) : (
                    <div className='hourly'>
                        <h2>Hour</h2>
                        <div>Icon</div>
                        <span className='temperature'>Temperature</span>
                    </div>
                )
            }
        </section>
    );
};

export default TodayWeather;
