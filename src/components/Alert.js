import React from 'react'

function Alert(props) {
    const capitalize = (word) =>{
        if (typeof word !== 'string' || word.length === 0) {
            return '';
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}   role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            </div>
        </div>

    )
}

export default Alert
