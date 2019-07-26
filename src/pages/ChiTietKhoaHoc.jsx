import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function ChiTietKhoaHoc(props) {

    let maKhoaHoc = props.match.params.maKhoaHoc;
    let [khoaHoc, setKhoaHoc] = useState({});

    useEffect(()=> {
        axios({
            url: 'http://svcy.myclass.vn/api/quanlytrungtam/laychitietkhoahoc/'+ maKhoaHoc,
            method: 'GET'
        }).then(result => {
            console.log(result.data);
            
        }).catch(err=>{
            console.log(err.response.data);
            
        })
    }, khoaHoc)

    return (
        <div>
            chi tiet khoa hoc
        </div>
    )
}
