import React from 'react';
import { google,slack, dropbox, atlassian, shopify } from './imports';
import './brand.css';

const Brand = () => {
    return (
        <div className="gpt3__brand section__padding">
            <div>
                <img src={google} alt="Google" />
            </div>
            <div>
                <img src={slack} alt="Slack" />
            </div>
            <div>
                <img src={dropbox} alt="dropbox" />
            </div>
            <div>
                <img src={atlassian} alt="atlassian" />
            </div>
            <div>
                <img src={shopify} alt="shopify" />
            </div>
        </div>
    )
}

export default Brand
