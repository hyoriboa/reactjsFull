import React, {Fragment} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';

//Admin layout
const AdminLayout = ({children}) => {
    return (
        <Fragment>
            <AdminHeader></AdminHeader>
            {children}
        </Fragment>
    )
}

const AdminTemplate = ({Component, ...rest}) => {
    return (
        <Route {...rest} render={(matchProps) => {

            if(localStorage.getItem('userlogin')){
                return (
                    <AdminLayout>
                        <Component {...matchProps} />
                    </AdminLayout>
                )
            } else {
                return <Redirect to='/trangchu' />
            }

            // return (
            //     <AdminLayout>
            //         <Component {...matchProps} />
            //     </AdminLayout>
            // )
        }} />
    )
}

export default AdminTemplate;