import * as React from "react"
import PropTypes from "prop-types"

const SectionHeader = ({ label }) => (
    <h2 className="section-header">{label}</h2>
);

// SectionHeader.propTypes = {
//   label: PropTypes.string,
// }

SectionHeader.defaultProps = {
  label: `Section Header`,
}

export default SectionHeader
