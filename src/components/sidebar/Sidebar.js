import "./sidebar.css";
import { MessageOutlined, LikeOutlined, BookOutlined, ProfileOutlined, HomeOutlined, PlusSquareOutlined, QuestionCircleOutlined, TeamOutlined } from '@ant-design/icons';
import { Users } from "../../dummyData";
import CloseFriend from "../closefriend/CloseFriend";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <HomeOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Home</span>
          </li>
          <li className="sidebarListItem">
            <MessageOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <LikeOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">My Like</span>
          </li>
          <li className="sidebarListItem">
            <BookOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">My Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <ProfileOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">My Profile</span>
          </li>
          <li className="sidebarListItem">
            <PlusSquareOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">My Posts</span>
          </li>
          <li className="sidebarListItem">
            <TeamOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <QuestionCircleOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">
         {Users?.map((u)=>(
          <CloseFriend key={u.id} user={u}/>
         ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;
