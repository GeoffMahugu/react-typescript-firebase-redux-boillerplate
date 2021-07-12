import React from 'react';
export interface ILoadingProps {
    message?: string
}

const Loading: React.FunctionComponent<ILoadingProps> = props => {
    return (
        <div className="loading-container">
            <div className="loading-logo-wrapper">
                {/* <img src="/icons/android-icon-96x96.png" alt="Logo" /> */}
            </div>
            <div className="loading-message-wrapper">
                {props.message
                    ? <p className="loding-message">{props.message}</p>
                    : <p className="loding-message">Loading...</p>
                }
            </div>
        </div>
    )
}

export default Loading;
