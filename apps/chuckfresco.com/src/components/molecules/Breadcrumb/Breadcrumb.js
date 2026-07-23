import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  navContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    textAlign: 'center',
    padding: '8px 16px',
  },
  navLink: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '1rem',         // 16px
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#90caf9',
    textDecoration: 'none',
    margin: '0 4px',
    '&:hover': {
      textDecoration: 'underline',
    },
    
  },
  separator: {
    margin: '0 6px',
    color: '#aaa',
  },
  pixelsNav: {
    gap: 8,
    padding: '12px 16px',
    [theme.breakpoints.down('xs')]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      width: '100%',
      gap: 8,
      padding: '10px 8px',
    },
  },
  pixelsLink: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 38,
    padding: '8px 14px',
    margin: 0,
    border: '2px solid #7770af',
    borderRadius: 5,
    background: '#29255d',
    color: '#fffce8',
    fontFamily: '"Pixels Kemco", "Smallest Pixel", monospace',
    fontSize: 14,
    lineHeight: 1,
    letterSpacing: '.02em',
    textShadow: '2px 2px 0 #21154e',
    boxShadow: '0 3px 0 #0b0a24',
    transition: 'transform .12s ease, background-color .12s ease, border-color .12s ease',
    '&:hover': {
      color: '#ffffff',
      background: '#3b347e',
      borderColor: '#9b7bff',
      textDecoration: 'none',
      transform: 'translateY(-1px)',
    },
    '&:focus-visible': {
      outline: '3px solid #dfff19',
      outlineOffset: 2,
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      minHeight: 42,
      padding: '8px 6px',
      fontSize: 12,
    },
  },
  pixelsActive: {
    color: '#15122f',
    background: '#dfff19',
    borderColor: '#f4ff91',
    textShadow: 'none',
    boxShadow: '0 3px 0 #788e00',
    '&:hover': {
      color: '#15122f',
      background: '#dfff19',
    },
  },
}));

const Breadcrumb = ({ data, className = '', variant = 'default', ...rest }) => {
  const classes = useStyles();
  const location = useLocation();
  const isPixels = variant === 'pixels';

  return (
    <Box
      component="nav"
      aria-label={isPixels ? 'Pixels tools' : 'Breadcrumb'}
      className={`${classes.navContainer} ${isPixels ? classes.pixelsNav : ''} ${className}`}
      {...rest}
    >
      {data.map((item, index) => {
        const isActive = item.isActive || location.pathname === item.href;
        return (
        <React.Fragment key={index}>
          {isActive ? (
            <Link
              href={item.href}
              aria-current="page"
              className={`${classes.navLink} ${isPixels ? `${classes.pixelsLink} ${classes.pixelsActive}` : ''}`}
            >
              {item.title}
            </Link>
          ) : (
            <Link
              color="primary"
              href={item.href}
              className={`${classes.navLink} ${isPixels ? classes.pixelsLink : ''}`}
            >
              {item.title}
            </Link>
          )}
          {!isPixels && index < data.length - 1 && (
            <Typography variant="body2" className={classes.separator}>
              |
            </Typography>
          )}
        </React.Fragment>
      )})}
    </Box>
  );
};

Breadcrumb.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
  variant: PropTypes.oneOf(['default', 'pixels']),
};

export default Breadcrumb;
