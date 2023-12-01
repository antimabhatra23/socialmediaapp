import './profile.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Right from '../../components/rightbar/Right';

const Profile = () => {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className='profileCoverImg' src="/assets/post/4.jpg" alt="" />
                            <img className='profileUserImg' src="/assets/person/1.jpg" alt="" />
                        </div>

                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Kartik Sharma</h4>
                            <span className='profileInfoDesc'>Jay Shree Radhe Krishna</span>
                        </div>
                    </div>

                    <div className="profileRightBottom">
                        <Feed />
                        <Right profile/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;
