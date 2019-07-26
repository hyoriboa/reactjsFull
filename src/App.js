import React, { useState, useEffect, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TrangChu from './pages/TrangChu';
import TrangDanhMucKhoaHoc from './pages/TrangDanhMucKhoaHoc';
import Header from './components/Header';
import HomeTemplate from './templates/HomeTemplate';
import AdminTemplate from './templates/AdminTemplate';
import Admin from './pages/Admin';
import ChiTietKhoaHoc from './pages/ChiTietKhoaHoc';
import DangNhap from './pages/DangNhap';
import ThongTinTaiKhoan from './pages/ThongTinTaiKhoan';

function App () {
  return (
    <BrowserRouter>
      <Fragment> {/* tương đương ng-container trong angular */}
       {/* <Route exact path='/trang-chu' component={TrangChu} /> */}
       {/* <Header /> */}

       <Switch>

          {/* <Route path='/trangchu' component={TrangChu} />
          <Route path='/danhmuckhoahoc' component={TrangDanhMucKhoaHoc} />
          <Route path="/" component={TrangChu} /> */}

          <HomeTemplate path='/trangchu' Component={TrangChu} />
          <HomeTemplate path='/danhmuckhoahoc' Component={TrangDanhMucKhoaHoc} />
          <HomeTemplate path='/chitietkhoahoc/:maKhoaHoc' Component={ChiTietKhoaHoc} />
          <HomeTemplate path='/dangnhap' Component={DangNhap} />
          <HomeTemplate path='/thongtintaikhoan' Component={ThongTinTaiKhoan} />
          {/* Admin */}
          <AdminTemplate path='/admin' Component={Admin} />
          <HomeTemplate path="/" Component={TrangChu} />



       </Switch>
       
      </Fragment>
    </BrowserRouter>
  );

}

export default App;















// import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios';
// import { layDanhSachPhimAction } from './redux/actions/QuanLyPhimActions';
// import { connect } from 'react-redux';
// function App(props) {
//   //hook sử dụng tương đương state, setState
//   //useState: thay thế this.state và this.setState của react class component
//   // let [state, setState] = useState({ status: false }); useState([giá_tri_khởi_tạo_ban_đầu_của_state])
//   // setState(): là phương thức nhận vào giá trị mới của state => gán cho state => render lại jsx
//   let [status, setStatus] = useState(false);
//   let [dsPhim, setDSPhim] = useState([]);
//   let anHien = () => {
//     // setState({ status: !state.status });
//     setStatus(!status);
//   }

//   //useEffect: Thay cho componentdidmount,...
//   //useEffect => nhận vào 1 callback function => thực thi callback đó sau khi render giao diện
//   useEffect(() => {
//     props.layDanhSachPhim();
//   }, dsPhim) //khi nào dsPhim thay đổi thì useEffect mới được gọi lại

//   return (
//     <div className="App">
//       {props.danhSachPhim.map((phim, i) => {
//         return <p key={i}>{phim.tenPhim}</p>
//       })}
//     </div>
//   );
// }
// const mapStateToProps = (state) => {
  
//   return {
//     danhSachPhim: state.QuanLyPhimReducer.danhSachPhim
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     layDanhSachPhim: () => {
//       dispatch(layDanhSachPhimAction());
//     }
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);


