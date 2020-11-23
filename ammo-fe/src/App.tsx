import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootReducer } from 'redux/reducers';
import useWs from 'hook/useWs';
import { Bullet } from 'shared/typings/Bullet';

function App(): React.ReactElement {
    useWs();

    const connected = useSelector((state: RootReducer) => state.ws.connected);
    const bullets = useSelector((state: RootReducer) => state.ws.bullets);

    return (
        <div className="App">
            <header className="App-header">
                {connected ? (
                    <>
                        {bullets && (
                            <div id="bullets">
                                {bullets.map(
                                    (bullet: Bullet, index: number) => (
                                        <div key={index}>{bullet.url}</div>
                                    )
                                )}
                            </div>
                        )}
                        <p id="ws-connected">
                            Edit <code>src/App.tsx</code> and save to reload.
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </>
                ) : (
                    <p
                        id="ws-not-connected"
                        style={{ color: 'red', fontSize: '22px' }}
                    >
                        You're not connected
                    </p>
                )}
            </header>
        </div>
    );
}

export default App;
