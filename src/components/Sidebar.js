// src/components/Sidebar.js
import React from 'react';
import '../css/sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
const Sidebar = () => {

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit' // Tùy chọn để màu chữ không thay đổi
    
  };
  return (
    <aside>
      <h2>About Me</h2>
      <p>Blog này là không gian tôi muốn chia sẻ những câu chuyện, ý tưởng và tác phẩm của mình với tất cả các bạn yêu nghệ thuật... </p>
      <h2>Contact</h2>
      <div className='icon'>

        <a href="https://www.facebook.com/nhatha.lepham.73/" target="_blank" rel="noopener noreferrer" >
          <FontAwesomeIcon icon={faFacebook} /> Lê Phạm Nhật Hạ
        </a>
      </div>
      <div className='icon'>

        <a href="https://www.instagram.com/l.p.n.ha_?fbclid=IwY2xjawGhsmJleHRuA2FlbQIxMAABHTakdblWQUrCqtqtNvDr6waEqk6CYn85XLRMsTSPlruUzeG5IIzf79_dLg_aem_" target="_blank" rel="noopener noreferrer" >
          <FontAwesomeIcon icon={faInstagram} /> l.p.n.ha_
        </a>
      </div>
      <div className='icon'>
          <FontAwesomeIcon icon={faEnvelope} /> Lephamnhatha0310@gmail.com
      </div>

    </aside>
  );
};

export default Sidebar;
