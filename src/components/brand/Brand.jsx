import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';

function Brand() {
  return (
    <div className="flex flex-wrap justify-center md:justify-between">
      <div className="w-1/2 md:w-auto p-2">
        <img src={google} alt="Google" />
      </div>
      <div className="w-1/2 md:w-auto p-2">
        <img src={slack} alt="Slack" />
      </div>
      <div className="w-1/2 md:w-auto p-2">
        <img src={atlassian} alt="Atlassian" />
      </div>
      <div className="w-1/2 md:w-auto p-2">
        <img src={dropbox} alt="Dropbox" />
      </div>
      <div className="w-1/2 md:w-auto p-2">
        <img src={shopify} alt="Shopify" />
      </div>
    </div>
  );
}

export default Brand;
