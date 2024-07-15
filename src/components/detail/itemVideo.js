import React from "react"

const ItemVideo = (props) => {

  const { data } = props

  return (
    <>
      <div className='content-title'>
        <h5>Nội dung khóa học - {data.TIEU_DE_KHOA_HOC}</h5>
      </div>
      <div className='content-blog-image'>
        {data.LINK_VIDEO == null ? (<div>Khóa học đang được cập nhật</div>) : (
            <iframe src={`${data.LINK_VIDEO === undefined ? ('') : (data.LINK_VIDEO)}`}
            allowFullScreen allow='autoplay; 
            encrypted-media'
            className='w-100'
            frameBorder="0"
            height="600"
            title='video'>
          </iframe>
        )}
      
      </div>
      <div className='content-blog-info mb-0'>
        <div className='list-post'>
          <ul>
            <li>
              <div className='post-author'>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ItemVideo