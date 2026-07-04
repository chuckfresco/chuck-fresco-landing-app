import React from 'react';
import PropTypes from 'prop-types';
import PixelsHero from 'views/PixelsLandInventory/components/Hero';

const Hero = props => {
  const { className, ...rest } = props;

  return (
    <PixelsHero
      className={className}
      title="Industry Limits"
      compact
      {...rest}
    />
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
