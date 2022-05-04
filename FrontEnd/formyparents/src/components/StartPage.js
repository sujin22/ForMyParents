import React from 'react';
import {Link} from 'react-router-dom';
import giftImg from '../static/img/purr-gift-with-bow.png';

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

function StartPage(history) {

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-middle',
    showConfirmButton: false,
    timer: 2000
  })

  const copyLink = ()=>{
    navigator.clipboard.writeText("https://formyparents.site");
    Toast.fire({
      icon: 'success',
      title: '클립보드에 저장되었습니다!'
    })
  }
  
const shareKakao = () => {
  window.Kakao.Link.sendDefault({
    objectType: "feed",
      content: {
        title: "어버이날 선물 뭐하지?",
        description: "평소 부모님의 모습으로 알아보는 어버이날 맞춤 선물!",
        imageUrl: 'https://formyparents.site/thumbnail.png',
        link: {
          mobileWebUrl: "formyparents.site",
        },
      },
      buttons: [
        {
          title: "테스트하러 가기!",
          link: {
            mobileWebUrl: "https://formyparents.site",
          },
        },
      ],
  });
}

  return (
    <article className="rending container">
      {/* <GoogleAdvertise 
        {...infeedProps}
      /> */}
      <div className='title'>
        <img className="gift-img" src={giftImg} />
        어버이날<br></br>
        선물 뭐 하지?
      </div>
      <div className='subtitle'>
        매넌 어버이날 선물에 골머리를 앓는 <br></br>
        이 시대 모든 딸과 아들을 위해 
      </div>
      <div className='main'>
        평소 부모님의 모습을 선택하고 <br></br>
        취향저격 선물을 준비하세요!
      </div> 
      <Link to="/process" style={{ textDecoration: 'none' }}>
        <div className='button'>
          <p className='button-main'>테스트 하러 가기!</p>
          <p className='button-sub'>
            현재 많은 효녀, 효자들이<br></br>
            부모님께 웃음을 드렸어요
          </p>
        </div>
      </Link>
      <div className='sharing'>
        <p className='sharing-title'>
          <span>아직 골머리 앓는</span><br></br>
          친구에게 공유하기
        </p>
        <div className='sharing-buttons'>
          <button className='sharing-button link' onClick={() => copyLink()}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#BB9B72"/>
            <g clipPath="url(#clip0_15_86)">
            <path d="M13.1075 28.0433C10.7787 25.7146 10.7787 21.9457 13.1075 19.617L21.1508 11.5737C22.8437 9.88072 25.5861 9.88072 27.2791 11.5737C28.972 13.2666 28.972 16.009 27.2791 17.7019L20.7678 24.2132C19.7107 25.2703 17.9948 25.2703 16.9376 24.2132C15.8805 23.1561 15.8805 21.4401 16.9376 20.383L22.6829 14.6378L24.2149 16.1698L18.4007 21.984C17.9794 22.4053 18.7455 23.1714 19.1668 22.7501L25.747 16.1698C26.5896 15.3272 26.5896 13.9484 25.747 13.1057C24.9044 12.2631 23.5255 12.2631 22.6829 13.1057L14.6395 21.1491C13.1611 22.6275 13.1611 25.0328 14.6395 26.5113C16.118 27.9897 18.5233 27.9897 20.0018 26.5113L27.2791 19.234L28.8111 20.766L21.5338 28.0433C19.2051 30.3721 15.4362 30.3721 13.1075 28.0433Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_15_86">
            <rect width="26" height="26" fill="white" transform="translate(2 20) rotate(-45)"/>
            </clipPath>
            </defs>
            </svg>
            <span>링크공유</span>
          </button>
          <button className='sharing-button kakao' onClick={shareKakao}>
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20.5" cy="20.5" r="20.5" fill="#FEE500"/>
            <path d="M20.6025 9.84C13.5263 9.84 7.78998 14.346 7.78998 19.9044C7.78998 23.498 10.1881 26.6512 13.7956 28.4318C13.5993 29.1061 12.5344 32.7698 12.492 33.0576C12.492 33.0576 12.4665 33.2739 12.6071 33.3563C12.7477 33.4388 12.913 33.3747 12.913 33.3747C13.3161 33.3187 17.5875 30.3295 18.3268 29.8105C19.0653 29.9147 19.8258 29.9688 20.6025 29.9688C27.6787 29.9688 33.415 25.4629 33.415 19.9044C33.415 14.346 27.6787 9.84 20.6025 9.84Z" fill="black" fillOpacity="0.9"/>
            </svg>
            <span>카톡공유</span>
          </button>
        </div>
      </div>
      <div className='footer'>
        <p>광고 및 후원 문의</p>
        <p className='info'>numva.201@gmail.com</p>
        <p className='info'>© 2022 Egong-il. All Rights Reserved.</p>
      </div>
    </article>
  );
}

export default StartPage;
