import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../actions/usersActions";
import profileImg from "../../images/profile_img.jpeg";
import Footer from "../Footer/Footer";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <>
      <div className="users">
        {users.map((el) => (
          <div className="user">
            <div className="user_img_container">
              <div
                style={{
                  backgroundImage: `url("${profileImg}")`,
                }}
                className="user_img"
              ></div>
            </div>
            <div className="user_desciption_text">
              <p>{el.name}</p>
              <p
                style={{
                  color: "#B7B7B7",
                  fontWeight: "700",
                  fontSize: "18px",
                }}
              >
                {el.email}
              </p>
              <div className="user_description_savoir_plus">
                <p className="user_savoir_plus">voir détails</p>
                <svg
                  className="next_img"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15.958"
                  height="15.515"
                  viewBox="0 0 15.958 15.515"
                  style={{ fill: "#7daf3f" }}
                >
                  <path
                    id="Tracé_20"
                    data-name="Tracé 20"
                    d="M16.14,10.982H4v1.995H16.14l-5.35,5.35,1.41,1.41,7.758-7.758L12.2,4.222l-1.41,1.41Z"
                    transform="translate(-4 -4.222)"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Users;
