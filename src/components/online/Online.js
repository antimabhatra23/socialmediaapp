import "./online.css";

const Online = ({ user }) => {
    console.log(user);
    return (
        <li className="rightbarFriendListItem">
            <div className="rightbarprofileImgContainer">
                <img className='righbarProfileImg' src={user.profilePicture} alt="" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="righbarUsername">{user.username}</span>
        </li>
    )
}

export default Online
