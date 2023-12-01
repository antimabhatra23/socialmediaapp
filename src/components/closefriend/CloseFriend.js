import './closefriend.css';

const CloseFriend = ({user}) => {
    return (
        <li className="sidebarFriend">
            <img className="sidebarProfileImage" src={user.profilePicture} alt="" />
            <span className="sidebarName">{user.username}</span>
        </li>
    )
}

export default CloseFriend;
