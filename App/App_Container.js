import React, { useState } from 'react'
import App from './App'
import { ProfileContext, ProfileContextSet } from './context/context'

const App_Container = () => {

    const [profile, setProfile] = useState([]);

    return (
        <ProfileContext.Provider value={profile}>
            <ProfileContextSet.Provider value={setProfile}>
                <App/>
            </ProfileContextSet.Provider>
        </ProfileContext.Provider>
    )
};

export default App_Container