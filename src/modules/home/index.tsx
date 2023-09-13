import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import '../../App.css';
import { useState } from 'react';

export default function HomePage() {
    const [count, setCount] = useState(0);

    const onCLick = () => {
        setCount(count => count + 1);
    };

    if (count === 5) {
        throw new Error('Count is 5. Error Occurred.');
    }

    return (
        <div>
            <div>
                <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
                    <img src={viteLogo} className='logo' alt='Vite logo' />
                </a>
                <a href='https://react.dev' target='_blank' rel='noreferrer'>
                    <img src={reactLogo} className='logo react' alt='React logo' />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className='card'>
                <button onClick={onCLick}>count is {count}</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
        </div>
    );
}
