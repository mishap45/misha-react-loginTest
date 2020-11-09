import React, { useContext } from 'react'
import Profile from './Profile'
import { ProfileContext } from '../../context/context'

const Profile_Container = () => {

    const profile = useContext(ProfileContext);

    return <Profile profile={profile} />
};

export default Profile_Container