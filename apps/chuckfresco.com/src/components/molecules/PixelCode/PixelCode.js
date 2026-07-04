import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const pixelIcon = '/assets/pixels/land/icons/pixel.png';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    minHeight: 26,
    backgroundColor: '#d7ff00',
    color: '#050505',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3px 12px',
    marginBottom: 0,
    borderTop: '1px solid rgba(255, 255, 255, 0.35)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1.2,
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      minHeight: 34,
      fontSize: 12,
      padding: '5px 10px',
    },
  },
  content: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    flexWrap: 'wrap',
  },
  icon: {
    width: 18,
    height: 18,
    objectFit: 'contain',
  },
  code: {
    fontWeight: 900,
    letterSpacing: 0,
  },
}));

const PixelCode = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <img src={pixelIcon} alt="Pixels" className={classes.icon} />
        <span>Use Code:</span>
        <span className={classes.code}>FRESCO</span>
        <span>for 5% Pixel purchase discount!</span>
      </div>
    </div>
  );
};

export default PixelCode;
