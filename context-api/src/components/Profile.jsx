import {useContext} from 'react'
import UserContext from '../context/userContext'

const Profile = () => {
    const {user} = useContext(UserContext);
    // console.log(user)

    if (!user) {
        return <h1>Not Logged in </h1>
    }
    return (
        <div>
            <h2>Profile</h2>
            <h3>username: <span>{user.username}</span></h3>
            <h3>Email: <span>{user.email}</span></h3>
        </div>
    )
}

export default Profile
