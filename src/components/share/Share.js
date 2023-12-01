import './share.css';
import { PictureFilled, TagsFilled,  MehFilled} from '@ant-design/icons';

const Share = () => {
    return (
        <div className='shareContainer'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg' src="/assets/person/1.jpg" alt="profile" />
                    <input placeholder="What's in your mind?" className='shareInput' />
                </div>
                <hr className='shareHr' />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PictureFilled style={{color: "tomato"}} className='shareIcon' />
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <PictureFilled style={{color: "tomato"}} className='shareIcon'/>
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className="shareOption">
                            <TagsFilled style={{color: "blue"}} className='shareIcon'/>
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className="shareOption">
                            <MehFilled style={{color: "goldenrod"}} className='shareIcon'/>
                            <span className='shareOptionText'>Feelings</span>
                        </div>
                    </div>

                    <button className='shareButton'>Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share;
