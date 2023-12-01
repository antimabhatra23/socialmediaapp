import Search from 'antd/es/input/Search';
import './topbar.css';
import { ProfileFilled, MessageFilled,  BellFilled } from '@ant-design/icons';

const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">Pavnsocial</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className='searchInput' placeholder='Search for friends, posts or videos' />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">HomePage</span>
                    <span className="topbarLink">TimelIne</span>
                </div>
                <div className="tobarIcons">
                    <div className="topbarIconItem">
                        <ProfileFilled />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <MessageFilled />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <BellFilled />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>

                <img src="/assets/person/1.jpg" alt="" className='topbarImage'/>
            </div>
        </div>
    )
}

export default Topbar
