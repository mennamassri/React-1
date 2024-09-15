
import PropTypes from 'prop-types';

const Post = ({ userName, userImg, time, postText, images }) => {
  return (
    <div className="card w-100 shadow p-3 my-4">
      <div className="d-flex name">
        <img className="img-fluid user-img mx-3" src={userImg} alt="User" />
        <h5 className="card-title fs-4 mt-2">{userName}</h5>
      </div>
      <small className="ms-auto">{time}</small>
      <div className="card-body">
        <p className="card-text">{postText}</p>
        {images && (
          <div className="post-images">
            {images.map((image, index) => (
              <div key={index} className="col-md-6">
                <img className="img-fluid img-card-buttom " style={{ width: '290px' }} src={image} alt="post" />
              </div>
            ))}
          </div>
        )}
        <button className="btn btn-danger my-3 mx-1">
          <i className="fas fa-thumbs-up"></i> Like
        </button>
        <button className="btn btn-danger my-3 mx-1">
          <i className="fas fa-comment"></i> Comment
        </button>
      </div>
    </div>
  );
};


Post.propTypes = {
  userName: PropTypes.string.isRequired,
  userImg: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  postText: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
};

export default Post;

     



