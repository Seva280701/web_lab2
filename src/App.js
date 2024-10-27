// src/App.js
import React, { useEffect, useState } from 'react';
import PianoKey from './components/PianoKey';

import key01 from './sounds/key01.mp3';
import key02 from './sounds/key02.mp3';
import key03 from './sounds/key03.mp3';
import key04 from './sounds/key04.mp3';
import key05 from './sounds/key05.mp3';
import key06 from './sounds/key06.mp3';
import key07 from './sounds/key07.mp3';
import key08 from './sounds/key08.mp3';
import key09 from './sounds/key09.mp3';
import key10 from './sounds/key10.mp3';
import key11 from './sounds/key11.mp3';
import key12 from './sounds/key12.mp3';
import key13 from './sounds/key13.mp3';
import key14 from './sounds/key14.mp3';
import key15 from './sounds/key15.mp3';
import key16 from './sounds/key16.mp3';
import key17 from './sounds/key17.mp3';
import key18 from './sounds/key18.mp3';
import key19 from './sounds/key19.mp3';
import key20 from './sounds/key20.mp3';
import key21 from './sounds/key21.mp3';
import key22 from './sounds/key22.mp3';
import key23 from './sounds/key23.mp3';
import key24 from './sounds/key24.mp3';

const App = () => {
    const [volume, setVolume] = useState(1.0);
    const [activeKey, setActiveKey] = useState(null); // Track the active key

    const sounds = [
        { note: 'C1', sound: key01, key: 'A' },
        { note: 'C#1', sound: key02, key: 'W', className: 'black' },
        { note: 'D1', sound: key03, key: 'S' },
        { note: 'D#1', sound: key04, key: 'E', className: 'black' },
        { note: 'E1', sound: key05, key: 'D' },
        { note: 'F1', sound: key06, key: 'F' },
        { note: 'F#1', sound: key07, key: 'T', className: 'black' },
        { note: 'G1', sound: key08, key: 'G' },
        { note: 'G#1', sound: key09, key: 'Y', className: 'black' },
        { note: 'A1', sound: key10, key: 'H' },
        { note: 'A#1', sound: key11, key: 'U', className: 'black' },
        { note: 'B1', sound: key12, key: 'J' },
        { note: 'C2', sound: key13, key: 'K' },
        { note: 'C#2', sound: key14, key: 'O', className: 'black' },
        { note: 'D2', sound: key15, key: 'L' },
        { note: 'D#2', sound: key16, key: 'P', className: 'black' },
        { note: 'E2', sound: key17, key: ';' },
        { note: 'F2', sound: key18, key: 'Z' },
        { note: 'F#2', sound: key19, key: 'X', className: 'black' },
        { note: 'G2', sound: key20, key: 'C' },
        { note: 'G#2', sound: key21, key: 'V', className: 'black' },
        { note: 'A2', sound: key22, key: 'B' },
        { note: 'A#2', sound: key23, key: 'N', className: 'black' },
        { note: 'B2', sound: key24, key: 'M' },
    ];

    const playSound = (sound) => {
        const audio = new Audio(sound);
        audio.volume = volume;
        audio.play();
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key.toUpperCase();
            const soundObj = sounds.find((s) => s.key === key);
            if (soundObj) {
                playSound(soundObj.sound);
                setActiveKey(key); // Set the active key
            }
        };

        const handleKeyUp = () => {
            setActiveKey(null); // Reset active key on key release
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [volume]);

    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
    };

    return (
        <div>
            <div className="app-header">
                <h1>Virtual Piano</h1>
                <p>Click on the keys or use your keyboard to play. Adjust the volume with the slider below.</p>
            </div>
            <div className="volume-control">
                <label>Volume:</label>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </div>
            <div className="piano">
                {sounds.map((sound, index) => (
                    <PianoKey
                        key={index}
                        sound={sound.sound}
                        className={sound.className || ''}
                        playSound={() => playSound(sound.sound)}
                        isActive={activeKey === sound.key} // Pass isActive prop
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
