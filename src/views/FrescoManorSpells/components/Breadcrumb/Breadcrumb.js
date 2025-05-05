import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Link, useMediaQuery } from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
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
}));

const Breadcrumb = ({ data, className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Box className={`${classes.navContainer} ${className}`} {...rest}>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          {item.isActive ? (
            <Typography >{item.title}</Typography>
          ) : (
            <Link  color="primary" href={item.href} className={classes.navLink}>
              {item.title}
            </Link>
          )}
          {index < data.length - 1 && (
            <Typography variant="body2" className={classes.separator}>
              |
            </Typography>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

Breadcrumb.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
};

export default Breadcrumb;
