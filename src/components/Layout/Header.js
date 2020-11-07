import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header
    style={{
      background: `black`,
      color: "white",
      display: "none",
    }}
  >
    <h1>Header</h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
