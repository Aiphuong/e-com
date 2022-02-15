import React from "react";
import PropTypes from "prop-types";
FooterTop.propTypes = {};

function FooterTop(props) {
  return (
    <div className="footer__item-wrap --top">
      <div className="footer__item">
        <h3 className="footer__item-heading">Get in touch</h3>
        <ul className="footer__item-menu">
          <li className="footer__item-link">
            <a href="#">
              <p className="link">About us</p>
            </a>
          </li>
          <li className="footer__item-link">
            <a href="#">
              <p className="link">Careers</p>
            </a>
          </li>
          <li className="footer__item-link">
            <a href="#">
              <p className="link">Press releases</p>
            </a>
          </li>
          <li className="footer__item-link">
            <a href="#">
              <p className="link">Blog</p>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__item">
        <h3 className="footer__item-heading">Connections</h3>
        <ul className="footer__item-menu">
          <li className="footer__item-link">
            <a href="#">
              <p className="link">Facebook</p>
            </a>
          </li>
          <li className="footer__item-link">
            <a href="#">
              <p className="link">Twitter</p>
            </a>
          </li>
          <li className="footer__item-link">
            <a href="#">
              <p className="link">Instagram</p>
            </a>
          </li>
          <li className="footer__item-link">
            <a href="#">
              <p className="link">Youtube</p>
            </a>
          </li>
          <li className="footer__item-link">
            <a href="#">
              <p className="link">LinkedIn</p>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__item">
        <h3 className="footer__item-heading">Earnings</h3>
        <ul className="footer__item-menu">
          <li className="footer__item-link">
            <a href="#">
              <p className="link">Becom an Affiliate</p>
            </a>
          </li>
          <li className="footer__item-link">
            <a href="#">
              <p className="link">Adverise your product</p>
            </a>
          </li>
          <li className="footer__item-link">
            <a href="#">
              <p className="link">Sell on Market</p>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__item">
        <h3 className="footer__item-heading">Account</h3>
        <ul className="footer__item-menu">
          <li className="footer__item-link">
            <a href="#">
              <p className="link">Your account</p>
            </a>
          </li>
          <li className="footer__item-link">
            <a href="#">
              <p className="link">Returns Centre</p>
            </a>
          </li>
          <li className="footer__item-link">
            <a href="#">
              <p className="link">100% purchase protection</p>
            </a>
          </li>
          <li className="footer__item-link">
            <a href="#">
              <p className="link">Chat with us</p>
            </a>
          </li>
          <li className="footer__item-link">
            <a href="#">
              <p className="link">Help</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterTop;
