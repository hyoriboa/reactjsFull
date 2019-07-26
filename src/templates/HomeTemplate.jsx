import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import Header from '../components/Header';

//Home layout
const HomeLayout = ({children}) => {
    return (
        <Fragment>
            <Header></Header>
            {children}       {/* giống ng-content trong angular */}
        </Fragment>
    )
}

const HomeTemplate = ({Component, ...rest}) => {

    return (
        <Route {...rest} render={(matchProp)=>{
            return (
                <HomeLayout>
                    <Component {...matchProp} />
                {/*  ... sẽ dc hiển thị tại children của HomeLayout */}
                </HomeLayout>
            )
        }} />
    )
}


export default HomeTemplate;