import React, { useState } from 'react'
// import { Outlet, Link } from "react-router-dom";
import './Home.css'
// import Im from '../image/banner.jpg'
import { GrPrevious, GrNext } from 'react-icons/gr'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Home = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    
  >
    <SwiperSlide>
     <img src="image/banner.jpg" alt="" style={{width:"100%",height:"75vh"}}/>
    </SwiperSlide>
    <SwiperSlide>
      <img src="image/field.jpg" alt="" style={{width:"100%",height:"75vh"}}/>
    </SwiperSlide>
    <SwiperSlide>
       <img src="image/gilly.jpg" alt="" style={{width:"100%",height:"75vh"}}/>
    </SwiperSlide>
    <SwiperSlide>
      <img src="image/istockphoto-1.jpg" alt="" style={{width:"100%",height:"75vh"}}/>
    </SwiperSlide>
    <SwiperSlide>
      <img src="image/istockphoto.jpg" alt="" style={{width:"100%",height:"75vh"}}/>
    </SwiperSlide>
    <SwiperSlide>
      <img src="image/johann-siemens-EPy0gBJzzZU-unsplash.jpg" alt="" style={{width:"100%",height:"75vh"}} />
    </SwiperSlide>
    <SwiperSlide>
      <img src="image/sandy-zebua.jpg" alt="" style={{width:"100%",height:"75vh"}}/>
    </SwiperSlide>
    <SwiperSlide>
      <img src="image/istockphoto-1092521964-170667a.webp" alt="" style={{width:"100%",height:"75vh"}}/>
    </SwiperSlide>
    <SwiperSlide>
      <img src="image/anders-nord-IQUyLpKDFKI-unsplash.jpg" alt="" style={{width:"100%",height:"75vh"}}/>
    </SwiperSlide>
    
  </Swiper>
  )
}

export default Home


// const images = [
//   {Im},
//   {Field}
// ]
// const Home = () => {
//   const [curr, setCurr] = useState(0)
//   const prevSlide = () =>{
//     setCurr(curr===0?images.length-1:curr-1)
//   }
//   const nextSlide = () =>{
//     setCurr(curr===images.length-1?0:curr+1)
//   }
//   return (
//     <>

//      <div className="container my-5">
//       <div className="row text-center">
//         <div className="col-6">
//               <div id="carouselExample" className="carousel slide">
//                 {
//                   images.map((value,index)=>{
//                     return (
//                       <div className="carousel-inner">
//                       <div className="carousel-item active">
//                         <img src={value} className="d-block w-100" alt="..."/>
//                       </div>
//                       </div>
//                   )
//                   })
//                 }
               
//               <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"
//               onClick={prevSlide}>
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"
//               onClick={nextSlide}>
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//         </div>
//       </div>
//      </div>

// const Home = ()=>{
//   return (
//     <>
//     <div classNameName="Home-container">
//      <div classNameName="main-contant">
//        <div >
//          <div classNameName='img'>
//             <GrPrevious/>
//              <img  style={{objectFit:'cover', padding:'10px', alignItems:'center'}} src={Im} alt="" width={1345} height={450}/>
//              <GrNext/>
//          </div>
//        </div>
//      </div>
//    </div> 
//     </>
//   )
// }


// export default Home