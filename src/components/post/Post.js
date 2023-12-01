import { MoreOutlined } from '@ant-design/icons';
import './post.css';
import { Users } from '../../dummyData';
import { useState } from 'react';

const Post = ({ post }) => {

    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const [comment, setComment] = useState(post.comment);
    const [isComment, setIsComment] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

    const commentHandler = () => {
        setComment(isComment ? comment - 1 : comment + 1);
        setIsComment(!isComment);
    }

    return (
        <div className='postContainer'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="profile" />
                        <span className="postUsename">{Users.filter(u => u.id === post.userId)[0].username}</span>
                        <span className='postDate'>{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreOutlined />
                    </div>
                </div>

                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className='postImage' src={post.photo} alt="post" />
                </div>

                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='postLike' src="/assets/like.png" onClick={likeHandler} alt="like" />
                        {/* <img className='postLike' src="/assets/heart.png" onClick={likeHandler} alt="heart" /> */}
                        <span className="postLikeCounter">{like}people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <img className='postComment' src="/assets/comment.png" onClick={commentHandler} alt="heart" />
                        <span className="postCommentText">{comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;
