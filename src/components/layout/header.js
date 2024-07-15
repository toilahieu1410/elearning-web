import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button } from "reactstrap";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { SidebarData } from "../../utilities/SidebarData";
import { _getUser } from "../../api/auth";
import useToken from "../../utilities/useToken";
import { FaBell, FaRegBell } from "react-icons/fa";

const Header = () => {
  const { token, setToken } = useToken();

  const [user, setUser] = useState({});
  const [active, setActive] = useState();

  const getDataUser = () => {
    _getUser(token.username).then((res) => {
      setUser(res);
    });
  };

  useEffect(() => {
    getDataUser();
  }, []);

  const onClick = (id) => {
    setActive(id);
  };

  const logout = () => {
    sessionStorage.clear();
    setTimeout(() => {
      window.location.href = `/login`;
    }, 200);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="navbar-header">
            <div className="d-flex align-items-center">
              <Link to={"/"} className="navbar-brand logo">
                <img
                  src={logo}
                  className="img-fluid"
                  alt="Logo"
                  style={{ height: 45 }}
                />
              </Link>
              <ul>
                {SidebarData.map((item, index) => (
                  <li
                    key={index}
                    className={
                      index === active ? "nav-text active" : "nav-text"
                    }
                    onClick={(e) => setActive(index)}
                  >
                    <Link to={item.path}>
                      {/* {item.icon} */}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="nav-item dropdown onhover-dropdown">
                {user && (
                  <Link className="nav-link header-login" to="#">
                    <span className="user-img">
                      <img
                        src={`http://sales.hoplong.com/Content/Images/Avatar/${user.AVATAR}`}
                        className="img-fluid rounded-circle"
                        alt=""
                      />
                      &nbsp;&nbsp;
                      {user.HO_VA_TEN}
                    </span>
                  </Link>
                )}
                <ul className="onhover-show-div dropdown-menu">
                  <li>
                    <Link className="nav-link" to="#">
                      Thông tin tài khoản
                    </Link>
                  </li>
                  <li>
                    <a onClick={() => logout()} className="nav-link">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <div className="list-notification">
                  <div className="notification">
                    <FaRegBell size={20} />
                    <span className="notification-count rounded-circle">
                      <span>3</span>
                    </span>
                  </div>
                  <div className="box">
                    <div className="position-relative">
                      <div className="cont">
                        <div className="sec new">
                          <a href="#">
                            <div className="profCont">
                              <img
                                className="profile"
                                src={`https://c1.staticflickr.com/5/4007/4626436851_5629a97f30_b.jpg`}
                                alt=""
                              />
                            </div>
                            <div className="txt">
                              <b>Bạn</b> có 1 thông báo mới
                            </div>
                            <div className="txt sub">1 giờ trước</div>
                          </a>
                        </div>
                        <div className="sec new">
                          <a href="#">
                            <div className="profCont">
                              <img
                                className="profile"
                                src="https://obamawhitehouse.archives.gov/sites/obamawhitehouse.archives.gov/files/styles/person_medium_photo/public/person-photo/amanda_lucidon22.jpg?itok=JFPi8OFJ"
                              />
                            </div>
                            <div className="txt">
                              <b>Hiếu</b> đã cập nhật bài học mới
                            </div>
                            <div className="txt sub">10 giờ trước</div>
                          </a>
                        </div>

                        <div className="sec">
                          <a href="https://codepen.io/Golez/">
                            <div className="profCont">
                              <img
                                className="profile"
                                src="https://c1.staticflickr.com/4/3725/10214643804_75c0b6eeab_b.jpg"
                              />
                            </div>
                            <div className="txt">
                              <b>Liêm</b> đã trả lời bình luận của bạn
                            </div>
                            <div className="txt sub">1 ngày trước</div>
                          </a>
                        </div>
                   
                        <div className="text-center">
                          <Button className="btn btn-default w-100 mb-0">
                           <span className='text-default'>Xem tất cả</span> 
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
