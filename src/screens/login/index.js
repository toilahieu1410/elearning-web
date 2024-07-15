import React, { Fragment, useState } from "react"
import { FormGroup, Label } from "reactstrap"
import Form from "react-validation/build/form"
import Input from "react-validation/build/input"
import { _getLogin } from "../../api/auth"
import logo from "../../assets/img/Logo-WiseElearning.png"
import imgAndroid from "../../assets/img/ggplay.png"
import imgIos from "../../assets/img/appstore.png"
import { toast } from "react-toastify"
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa"
import { SiZalo } from "react-icons/si"

const required = (value) => {
  if (!value) {
    return (
      <div className="alert-default alert-form text-danger" role="alert">
        chưa nhập thông tin!
      </div>
    );
  }
};

export const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [togglePassword, setTogglePassword] = useState(false);

  const HideShowPassword = (tPassword) => {
    setTogglePassword(!tPassword);
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      this.btn.click();
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    _getLogin(username, password).then((res) => {
      if (res.notification.indexOf("Đăng nhập thành công") !== -1) {
        const token = {
          username: res.user.USERNAME,
          macongty: res.user.MA_CONG_TY,
          hoTen: res.user.HO_VA_TEN,
          avatar: res.user.AVATAR,
          admin: res.user.IS_ADMIN,
          lock: res.user.LOCK,
        };
        setToken(token);
        console.log(token);
      } else {
        toast.success("Sai tài khoản hoặc mật khẩu!");
      }
    });
  };
  return (
    <Fragment>
      <div className="form-login">
        <div className='login-all'>
        <div className="loginRegister">
          <div className="login-header text-center">
            <img
              src={logo}
              className="d-block mb-3 w-60"
              style={{ margin: "0 auto" }}
            />
            {/* <h3>Login <span>E-Learning</span></h3> */}
            <p className="text-default text-uppercase mt-3 fw-bold">
              Công ty Cổ Phần Công Nghệ Hợp Long <br />
              Hệ thống đào tạo trực tuyến
            </p>
          </div>
          <Form className="theme-form ">
            <FormGroup className="my-3">
              <label className="form-control-label">Username</label>
              <input
                onKeyPress={handleKeypress}
                className="loginRegister-input form-control"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                validations={[required]}
              />
            </FormGroup>
            <FormGroup className="my-3">
              <label className="form-control-label">Password</label>
              <input
                className="loginRegister-input form-control"
                onKeyPress={handleKeypress}
                type={togglePassword ? "text" : "password"}
                name="login[password]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                validations={[required]}
              />
              <div
                className="show-hide"
                onClick={() => HideShowPassword(togglePassword)}
              >
                <span className={togglePassword ? "" : "show"}></span>
              </div>
            </FormGroup>
            <div className="form-group my-3">
              <div className="d-flex justify-content-between align-items-center my-3">
                <div className="checkbox ml-3 col-form-label d-flex align-items-center">
                  <Input
                    id="checkbox1"
                    type="checkbox"
                    className="loginRegister-input-checkbox"
                  />
                  <Label className="text-muted mx-2 mb-0" for="checkbox1">
                    Ghi nhớ mật khẩu
                  </Label>
                </div>
                <a className="link f-s-italic" href="#">
                  Quên mật khẩu?
                </a>
              </div>
            </div>
            <button
              type="submit"
              onClick={handleLogin}
              className="btn btn-block w-100 loginRegister-btn-primary"
            >
              <span className="text-white">Đăng nhập</span>
            </button>
          </Form>
          <div className="login-footer">
            <h4 className="fw-bold mt-4 text-center text-default">
              Tải ứng dụng Wise Elearning
            </h4>
            <div className="d-flex justify-content-between mt-3">
              <a className="logo-download" href="#">
                <img src={imgIos} className="w-100" style={{ maxWidth: 170 }} />
              </a>
              <a className="logo-download" href="#">
                <img
                  src={imgAndroid}
                  className="w-100"
                  style={{ maxWidth: 170 }}
                />
              </a>
            </div>
            <p className="mb-0 mt-2 help">Thông tin người trợ giúp:</p>
            <ul className="list-unstyled d-flex justify-content-between mb-0">
              <li>
                <FaUser color={"#3590DE"} size={12} />
                <span>LnD Department</span>{" "}
              </li>
              <li>
                <FaEnvelope color={"#3590DE"} size={12} />
                <span>lnd@hoplongtech.com.vn</span>
              </li>
              <li>
                <FaPhone color={"#3590DE"} size={12} />
                <span>0963.235.363</span>
              </li>
            </ul>
          </div>
        </div>

        <a
          href="https://chat.zalo.me/?phone=0866676616"
          id="linkzalo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div id="fcta-zalo-tracking" className="fcta-zalo-mess">
            <span id="fcta-zalo-tracking">Chat hỗ trợ</span>
          </div>
          <div className="fcta-zalo-vi-tri-nut">
            <div id="fcta-zalo-tracking" className="fcta-zalo-nen-nut">
              <div id="fcta-zalo-tracking" className="fcta-zalo-ben-trong-nut">
                {" "}
                <SiZalo />{" "}
              </div>
              <div id="fcta-zalo-tracking" className="fcta-zalo-text">
                Chat ngay
              </div>
            </div>
          </div>
        </a>
        </div>
     
      </div>
    </Fragment>
  );
};

export default Login;
