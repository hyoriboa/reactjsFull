import {combineReducers} from 'redux';
import QuanLyPhimReducer from './reducers/QuanLyPhimReducer';
import QuanLiNguoiDungReducer from './reducers/QuanLiNguoiDungReducer'


const rootReducer = combineReducers({
    QuanLyPhimReducer,
    QuanLiNguoiDungReducer
});


export default rootReducer;