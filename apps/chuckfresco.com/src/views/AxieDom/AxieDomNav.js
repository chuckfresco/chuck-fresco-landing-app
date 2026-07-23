import React from "react";
import { NavLink } from "react-router-dom";

const AxieDomNav = () => (
  <nav className="dom-subnav" aria-label="Axie Den of Mysteries guide navigation">
    <div className="dom-subnav__inner">
      <NavLink exact to="/axie-dom/strategy" activeClassName="is-active">
        <span className="dom-subnav__icon">◆</span>
        <span><small>NEW PLAYER</small>STRATEGY</span>
      </NavLink>
      <NavLink exact to="/axie-dom/power-ups" activeClassName="is-active">
        <span className="dom-subnav__icon">⚔</span>
        <span><small>RANKINGS</small>POWER UPS</span>
      </NavLink>
    </div>
  </nav>
);

export default AxieDomNav;
