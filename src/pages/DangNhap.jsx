import React, { Component } from 'react';
import {Prompt, Redirect} from 'react-router-dom';

import {dangNhapAction} from '../redux/actions/QuanLiNguoiDung';
import {connect} from 'react-redux';

class DangNhap extends Component {

    constructor(props){
        super(props);
        this.state = {
            taiKhoan: '',
            matKhau: '',
            status: false
        }
    }
    
    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    dangNhap = (e) => {
        e.preventDefault();
        // this.props.history.push('/trangchu'); //push: back ve dc trang truoc do
        // this.props.history.replace('/trangchu'); //replace: ko back ve dc

        this.props.dangNhap(this.state);
    }

    render() {

        if(localStorage.getItem('userLogin')){
            return <Redirect to='/trangchu' />
        }

        return (
            <form onSubmit={this.dangNhap} className="container">
                <h3>Dang nhap</h3>
                <div className="form-group">
                    <span>Tai Khoan</span>
                    <input className="form-control" name="taiKhoan" onChange={this.handleInput} />
                </div>
                <div className="form-group">
                    <span>Mat khau</span>
                    <input className="form-control" type="password" name="matKhau" onChange={this.handleInput} />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Dang nhap</button>
                </div>
                <Prompt when={this.status} message={location=>("Ban muon roi trang nay ko?")} />
            </form>
        )
    }
}


const mapDispatchToProps = (dispatch) =>{
    return {
        dangNhap: (nguoiDung) => {
            dispatch(dangNhapAction(nguoiDung))
        }
    }
}

export default connect(null, mapDispatchToProps)(DangNhap);


////npm install sweetalert2