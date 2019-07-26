import axios from 'axios';



export const layDanhSachPhimAction = ()=>{
    return dispatch => {
        axios({
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method: 'GET'
          }).then((result) => {
            console.log(result.data);
            dispatch({
                type:'LAY_DANH_SACH_PHIM',
                danhSachPhim:result.data
            })
          }).catch(error => {
            console.log(error.response.data);
          })
    }
}