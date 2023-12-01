import './right.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';


const Right = ({ profile }) => {

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className='birthdayImage' src="/assets/gift.png" alt="" />
          <span className="birthdayText"> {""} <b>Purnima Gupta</b> and <b>3 other friends </b> have a birthday today.</span>
        </div>

        <img className='rightBarAd' src="/assets/ad.jpg" alt="" />
        <h4 className='rightBarTitle'>Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users?.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>User information </h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">Delhi</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">India</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Email: </span>
            <span className="rightbarInfoValue">kartiksha45@gmail.com</span>
          </div>
        </div>

        <h4 className='rightbarTitle'>User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className='rightbarFollowingImg' src="/assets/person/2.jpg" alt="" />
            <span className="rightbarFollowingUsername">Janell Shrum</span>
          </div>
          <div className="rightbarFollowing">
            <img className='rightbarFollowingImg' src="/assets/person/3.jpg" alt="" />
            <span className="rightbarFollowingUsername">Alex Durden</span>
          </div>
          <div className="rightbarFollowing">
            <img className='rightbarFollowingImg' src="/assets/person/4.jpg" alt="" />
            <span className="rightbarFollowingUsername">Dora Hawks</span>
          </div>
          <div className="rightbarFollowing">
            <img className='rightbarFollowingImg' src="/assets/person/7.jpg" alt="" />
            <span className="rightbarFollowingUsername">Travis Benet</span>
          </div>
          <div className="rightbarFollowing">
            <img className='rightbarFollowingImg' src="/assets/person/8.jpg" alt="" />
            <span className="rightbarFollowingUsername">Kriste Thoma</span>
          </div>
          <div className="rightbarFollowing">
            <img className='rightbarFollowingImg' src="/assets/person/9.jpg" alt="" />
            <span className="rightbarFollowingUsername">Kevin Roy</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Right;
