import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { RootReducer } from 'redux/reducers';

function App(): ReactElement {
    const connected = useSelector(
        (state: RootReducer) => state.wsMock.connected
    );

    return (
        <div className="App">
            <header className="App-header">
                {connected ? (
                    <>
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
