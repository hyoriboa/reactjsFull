import * as types from '../constants/QuanLiNguoiDung';
import * as config from '../../common/constants/config';
import axios from 'axios';
import swal from 'sweetalert2';


export const dangNhapAction = (nguoiDung) => {

    return dispatch => {
        axios({
            url: config.domain + 'api/QuanLyNguoiDung/DangNhap',
            method: 'POST',
            data: nguoiDung
        }).then(result => {//ham tra ve khi dang nhap thanh cong
            console.log(result.data);
            //username: khai password: 321321
            //dang nhap thanh cong luu thong tin nguoi dung vao localstorage
            localStorage.setItem('userLogin', JSON.stringify(result.data));
            localStorage.setItem(config.accessToken, result.data.accessToken);
        }).catch(err => {//ham tra ve khi dang nhap that bai
            // console.log(err.response.data);
            swal.fire('Thong bao', err.response.data, 'warning');

        })
    }
}

export const layThongTinNguoiDungAction = (taiKhoan) => {
    return dispatch => {
        axios({
            url: config.domain + 'api/QuanLyNguoiDung/ThongTinTaiKhoan',
            method: 'POST',
            data: {taiKhoan: taiKhoan},
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(config.accessToken)
            }
        }).then(result => {//ham tra ve khi dang nhap thanh cong
            console.log(result.data);

            //sau case types.LAY_THONG_TIN_NGUOI_DUNG:
            dispatch({
                type: types.LAY_THONG_TIN_NGUOI_DUNG,
                thongTinTaiKhoan: result.data
            })

        }).catch(err => {//ham tra ve khi dang nhap that bai
            console.log(err.response.data);

        })
    }
}
