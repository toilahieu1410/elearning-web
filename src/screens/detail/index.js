import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { Row, Col } from "reactstrap"
import BreadcrumbComponent from "../../components/layout/breadcrumb"
import Updating from "../../components/layout/updating"
import { loadDanhSachBaiHoc } from "../../redux/khoaHoc/action"
import img1 from "../../assets/img/img-1.jpg"
import moment from "moment"
import {
  FaSearch,
  FaRegEye,
  FaRegClock,
  FaRegStar,
  FaStepForward,
} from "react-icons/fa";

const sobanghi = 0;

const Detail = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const listDanhSachBaiHoc = useSelector(
    (store) => store.khoaHoc.listDanhSachBaiHoc
  );
  const [listSort, setListSort] = useState(0);

  useEffect(() => {
    dispatch(loadDanhSachBaiHoc(id, sobanghi));
  }, [id]);

  let a = [];
  const demSoBaiHoc = () => {
    for (let i = 0; i < listDanhSachBaiHoc.length; i++) {
      if (a.length == 0) {
        a[0] = { name: listDanhSachBaiHoc[0].TEN_NGUOI_TAO, count: 1 };
      } else if (a.length > 0) {
        for (let j = 0; j < a.length; j++) {
          if (a[j].name == listDanhSachBaiHoc[i].TEN_NGUOI_TAO) {
            a[j] = {
              name: listDanhSachBaiHoc[i].TEN_NGUOI_TAO,
              count: a[j].count + 1,
            };
          } else {
            a[j + 1] = { name: listDanhSachBaiHoc[i].TEN_NGUOI_TAO, count: 1 };
            return a;
          }
        }
      }
    }
  };

  useEffect(() => {
    demSoBaiHoc();
    setListSort(a);
  }, [listDanhSachBaiHoc]);

  return (
    <div className="detail">
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="all-course-title">
            <h1 className="text-center mb-1 position-relative fw-bolder">
              Tên khóa học{" "}
            </h1>
          </div>
          <Row className="align-items-center">
            <Col md="12">
              <BreadcrumbComponent title={"Detail"} />
            </Col>
          </Row>
        </div>
      </div>
      <div className="list-courses-detail">
        <div className="container">
          {listDanhSachBaiHoc.length == 0 ? (
            <Updating />
          ) : (
            <Row>
              <Col md="4">
                <div className="page-sidebar">
                  <form className="form-inline mb-3">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Tìm kiếm khóa học"
                    />
                    <button
                      type="button"
                      className="btn btn-light position-absolute right-0"
                    >
                      <FaSearch />
                    </button>
                  </form>
                  <div>
                    <h5 className="page-sidebar-title">Khóa học</h5>
                    <ul className="list-unstyled mb-3">
                      {listDanhSachBaiHoc.map((item, index) => (
                        <li key={index}>
                          <input
                            type="checkbox"
                            id={`custom${index}`}
                            className="checkbox-custom"
                          />
                          <label
                            htmlFor={`custom${index}`}
                            className="checkbox-custom-label"
                          >
                            <span>{item.TIEU_DE_KHOA_HOC}</span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="page-sidebar-title">Người thực hiện</h5>
                    <ul className="list-unstyled mb-3">
                      {listSort &&
                        listSort.map((item, index) => (
                          <li key={index}>
                            <input
                              type="checkbox"
                              id={`user${index}`}
                              className="checkbox-custom"
                            />
                            <label
                              htmlFor={`user${index}`}
                              className="checkbox-custom-label"
                            >
                              <span>
                                {item.name}&nbsp;<span></span>({item.count})
                              </span>
                            </label>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>

                {/* <div className="course-watched">
                  <h5 className="page-sidebar-title mb-3">Khóa học đã xem</h5>
                  <div className="product-item d-flex align-items-center mb-3">
                    <div className="product-item-image">
                      <a href="#">
                        <img src={img1} className="img-fluid" />
                      </a>
                    </div>
                    <div className="product-item-info">
                      <h6 className="product-item-info-title mt-1">
                        Kỹ năng bán hàng đỉnh cao
                      </h6>
                      <p className="product-item-info-time">6h30 min</p>
                    </div>
                  </div>

                  <div className="product-item d-flex align-items-center">
                    <div className="product-item-image">
                      <a href="#">
                        <img src={img1} className="img-fluid" />
                      </a>
                    </div>
                    <div className="product-item-info">
                      <h6 className="product-item-info-title mt-1">
                        Kỹ năng bán hàng đỉnh cao
                      </h6>
                      <p className="product-item-info-time">6h30 min</p>
                    </div>
                  </div>
                </div> */}
              </Col>
              <Col md="8">
                <Row>
                  {listDanhSachBaiHoc[0].LEVEL !== 3
                    ? listDanhSachBaiHoc.map((item, index) => (
                        <Item key={index} item={item} />
                      ))
                    : listDanhSachBaiHoc.map((item, index) => (
                        <ItemCourse key={index} item={item} />
                      ))}
                </Row>
              </Col>
            </Row>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;

const Item = (props) => {
  const { item } = props;

  return (
    <Col md="6" lg="6">
      <div className="all-course-card">
        <Link to={`/detail/${item.ID}`}>
          <div className="all-course-image">
            <img
              src={
                item.LINK_ANH_BACKGROUND == null
                  ? img1
                  : item.LINK_ANH_BACKGROUND
              }
              className="img-fluid w-100 rounded-2"
              alt="detail"
            />
          </div>
        </Link>
        <div className="all-course-content">
          <div className="all-course-title">
            <h6>
              <Link to={`/detail/${item.ID}`}>{item.TIEU_DE_KHOA_HOC}</Link>
            </h6>
            <p className="d-inline-block mb-1">{item.NOI_DUNG_KHOA_HOC}</p>
          </div>
          <div className="all-course-info">
            <ul className="list-unstyled m-0 d-flex align-items-center justify-content-between">
              <li>
                <FaRegEye />
                <span>800 views</span>
              </li>
              {/* <li><FaRegClock /><span>{item.TONG_THOI_LUONG_VIDEO == null ? '' : item.TONG_THOI_LUONG_VIDEO}</span></li> */}
              <li>
                <FaRegStar color={"orange"} />
                <span>4.7 Reviews</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Col>
  );
};

const ItemCourse = (props) => {
  const { item } = props;

  return (
    <Col md="6" lg="6">
      <div className="course-item-list">
        <Link to={`/course-detail/${item.ID_KHOA_HOC_CHA}/${item.ID}`}>
          <div className="course-item-image">
            {item.LINK_ANH_BACKGROUND ? (
              <img
                src={item.LINK_ANH_BACKGROUND}
                className="img-fluid w-100 rounded-2"
                alt="detail"
              />
            ) : (
              <img
                src={img1}
                className="img-fluid w-100 rounded-2"
                alt="detail"
              />
            )}
          </div>
        </Link>
        <div className="course-item-content">
          <div className="course-item-title">
            <h6>
              <Link to={`/course-detail/${item.ID_KHOA_HOC_CHA}/${item.ID}`}>
                {item.TIEU_DE_KHOA_HOC}
              </Link>
            </h6>
            <p className="d-inline-block mb-1">{item.NOI_DUNG_KHOA_HOC}</p>
          </div>
          <div className="course-item-info">
            <ul className="list-unstyled m-0 d-flex align-items-center justify-content-between">
              <li>
                <FaRegEye />
                <span>800 views</span>
              </li>
              {item.NGAY_UPDATE ? (
                <li>
                  <FaRegClock />
                  <span>{moment(item.NGAY_UPDATE).format("DD/MM/YYYY")}</span>
                </li>
              ) : (
                <li>
                  <FaRegClock />
                  <span>{moment(item.NGAY_TAO).format("DD/MM/YYYY")}</span>
                </li>
              )}
              <li>
                <FaRegStar color={"orange"} />
                <span>4.7 Reviews</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Col>
  );
};
