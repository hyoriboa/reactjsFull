import React, { Component } from 'react'
import {connect} from 'react-redux';
import {layThongTinNguoiDungAction} from '../redux/actions/QuanLiNguoiDung';
import {Redirect} from 'react-router-dom';

class ThongTinTaiKhoan extends Component {

    componentDidMount() {
        this.props.layThongTinTaiKhoan();
    }

    render() {
        if(!localStorage.getItem('userLogin')){
            return <Redirect to='/trangchu' />
        }

        return (
            <div>
                {this.props.thongTinTaiKhoan.hoTen}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        thongTinTaiKhoan : state.QuanLiNguoiDungReducer.thongTinTaiKhoan
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        layThongTinTaiKhoan: () => {
            //lay tai khoan tu localStorage
            let taiKhoan = JSON.parse(localStorage.getItem('userLogin')).taiKhoan;
            dispatch(layThongTinNguoiDungAction(taiKhoan));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinTaiKhoan);