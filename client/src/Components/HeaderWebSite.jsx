import React from "react";
import { FormattedMessage } from "react-intl";

const HeaderWebSite = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  <FormattedMessage
                    id="ws.header.title"
                    defaultMessage="Dobro došli"
                  />
                  <span></span>
                </h1>
                <p>
                  <FormattedMessage
                    id="ws.header.paragraph"
                    defaultMessage="Predrag Stosic"
                  />
                </p>
                <a href="#about" className="btn btn-custom btn-lg page-scroll">
                  <FormattedMessage
                    id="ws.header.about"
                    defaultMessage="developer"
                  />
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderWebSite;
