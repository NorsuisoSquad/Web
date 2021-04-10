import React from 'react'

const Logo = (props) => {
    const { width } = props;
    return (
        <div className="logoWrapper">
            <img src="https://avatars.githubusercontent.com/u/81671829" width={width ? width : 0} alt="NS Logo" />
        </div>
    )
}

export default Logo
