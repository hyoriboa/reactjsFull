import React from 'react';
import {Link, NavLink} from 'react-router-dom'; //tương tự thẻ a


export default function Header() {

    let style = {color: 'red'};

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink className="navbar-brand" to='/trangchu'>Cybersoft</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink activeStyle={style} className="nav-link" to='/trangchu'>Home </NavLink>
                    </li>
                    <li className="nav-item">
                        {/* <NavLink activeStyle={{color: 'red'}} */}
                        <NavLink activeStyle={style}
                        className="nav-link" to="/danhmuckhoahoc">Danh muc khoa hoc</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/dangnhap">Dang nhap</NavLink>
                    </li>

                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

    )
}
