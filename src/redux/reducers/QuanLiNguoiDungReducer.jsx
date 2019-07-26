import * as types from '../constants/QuanLiNguoiDung';


const stateDefault = {
    thongTinTaiKhoan : {},
}

const QuanLiNguoiDungReducer = (state = stateDefault, action) => {
    
    switch(action.type) {
        case types.LAY_THONG_TIN_NGUOI_DUNG: {
            state.thongTinTaiKhoan = action.thongTinTaiKhoan;
            return {...state};
        }
    }
    
    return {...state};
} 

export default QuanLiNguoiDungReducer;