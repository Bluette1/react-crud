import React, { PropsWithChildren } from 'react'
import Menu from './components/Menu';
import ToggleThemeBtn from './components/ToggleThemeBtn';

const Wrapper = (props: PropsWithChildren) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Menu />
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    {/* <ToggleThemeBtn /> */}
                    {props.children}
                </main>
            </div>
        </div>)
}

export default Wrapper;
