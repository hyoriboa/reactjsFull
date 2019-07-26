import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

export default function TrangChu() {

    //danhSachKhoaHoc là 1 mảng các khóa học
    let [state, setState] = useState({
        danhSachKhoaHoc: []
    });

    useEffect(()=>{//thay cho lifecycle componentDidmount
        axios({
            url: 'http://svcy.myclass.vn/api/quanlytrungtam/danhsachkhoahoc',
            method: 'get'
        }).then(result => {
            //tuog tu setState
            setState({danhSachKhoaHoc: result.data});
        }).catch(err => {
            console.log(err.response.data);
        })
    }, state)

    return (
        <div className="container">
            <h3>Danh sach khoa hoc</h3>
            <div className="row">
                {state.danhSachKhoaHoc.map((khoaHoc, i) => {
                    return (
                        <div className="col-md-4" key={i}>
                            <div className="card">
                                <img className="card-img-top" src={khoaHoc.HinhAnh} alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">{khoaHoc.TenKhoaHoc}</h4>
                                    <NavLink to={`chitietkhoahoc/${khoaHoc.MaKhoaHoc}`}
                                     className="btn btn-primary">Xem chi tiet</NavLink>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
