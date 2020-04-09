import React from 'react';
import PropTypes from 'prop-types';

const formStyle = {
  display: 'inline-block',
};

function CollectionExportForm(props) {
  return (
    <form
      action="http://codepen.io/pen/define"
      method="POST"
      target="_blank"
      style={formStyle}
    >
      <input
        type="hidden"
        name="data"
        value={props.htmlMarkup}
      />

      <button type="submit" className="btn btn-default">
        Export as HTML
      </button>
    </form>
  );
}

export default CollectionExportForm;

CollectionExportForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  htmlMarkup: PropTypes.any.isRequired,
};
