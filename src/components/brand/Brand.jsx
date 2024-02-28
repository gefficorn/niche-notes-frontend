import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';

function Brand() {
  return (
    <div className="flex flex-wrap justify-center md:justify-between mx-auto max-w-screen-lg">
      <div className="w-full md:w-auto p-2">
        <img src={google} alt="Google" className="mx-auto" />
      </div>
      <div className="w-full md:w-auto p-2">
        <img src={slack} alt="Slack" className="mx-auto" />
      </div>
      <div className="w-full md:w-auto p-2">
        <img src={atlassian} alt="Atlassian" className="mx-auto" />
      </div>
      <div className="w-full md:w-auto p-2">
        <img src={dropbox} alt="Dropbox" className="mx-auto" />
      </div>
      <div className="w-full md:w-auto p-2">
        <img src={shopify} alt="Shopify" className="mx-auto" />
      </div>
    </div>
  );
}

export default Brand;
