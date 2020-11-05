import React, {useState, useEffect} from 'react';

import Api from '../services/api';

import '../styles/status.css';

function GetStatus() {
    const [status, setStatus] = useState([]);

    useEffect(() => {
        Api.get('/', {json: true}).then(res => {
            setStatus(res.data.components);
            
        });

    }, []);

    function RefreshStatus() {
        Api.get('/', {json: true}).then(res => {
            setStatus(res.data.components);

        });
    }
    
    return(
        <div id="container">
            <div className="get-status">
                <header>
                    <h1>Github Status</h1>

                </header>

                <main>
                    {status.map(stat => {

                        return(
                            stat.id !== '0l2p9nhqnxpd' &&  
                                                
                                <div key={stat.id} 
                                    className={stat.status === 'operational' ? 'operational' : 'not-operational'}
                                >
                                    <h3> {stat.name} </h3>

                                    <p> {stat.status.toUpperCase()} </p>

                                </div>
                        )                        
                    })}

                </main>
            </div>

            <button type="button" onClick={RefreshStatus}>Refresh Status</button>

        </div>

    );
}

export default GetStatus;