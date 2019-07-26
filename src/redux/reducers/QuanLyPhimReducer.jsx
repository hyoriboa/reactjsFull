

const storePhim = {
    danhSachPhim: []
}



const QuanLyPhimReducer = (state = storePhim, action) => {
    switch (action.type) {
        case 'LAY_DANH_SACH_PHIM': {
            //Sau khi gọi ajax từ action => lấy được dữ liệu phim gán dữ liệu phim cho store
            state.danhSachPhim = action.danhSachPhim;
            return {...state}
        }
    }
    return { ...state }
}

export default QuanLyPhimReducer;