export default function MyProfile() {
    return (
      <>
        <div className="card w-100 shadow p-1 justify-content-center align-items-center">
          <h5 className="card-title text-center my-3">My Profile</h5>
          <img className="img-card-top rounded-circle" src="img/avatar3.png" alt="dj" />
          <div className="line"></div>
          <div className="card-body">
            <ul className="card-text list-unstyled">
              <li><i className="fa-solid fa-pencil fs-5 p-2"></i> Designer, UI</li>
              <li><i className="fa-solid fa-house fs-5 p-2"></i> London, UK</li>
              <li><i className="fa-solid fa-cake-candles fs-5 p-2"></i> April 1, 1988</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
  