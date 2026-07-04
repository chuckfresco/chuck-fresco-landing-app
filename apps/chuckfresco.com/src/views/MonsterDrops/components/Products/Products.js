import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  colors,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const useStyles = makeStyles(theme => ({
  card: {
    boxShadow: '0 9px 18px 0 rgba(0, 0, 0, 0.1)',
    borderRadius: theme.spacing(2),
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
  cardMedia: {
    height: 290,
    padding: 0,
    position: 'relative',
    background: colors.indigo[50],
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover img': {
      transform: 'scale(1.05)',
    },
  },
  cardContent: {
    padding: theme.spacing(3),
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
}));

const Products = ({ data, className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    '/assets/fresco-manor-map.jpg',
    '/assets/fresco-manor-location.jpg',
  ];

  const handleClick = title => {
    if (title === 'FRESCO Manor Map') {
      setImageIndex(0);
      setIsLightboxOpen(true);
    } else if (title === 'Monster Drops') {
      window.location.href = '/runiverse/monster-drops';
    } else if (title === 'FRESCO Manor Spells') {
      window.location.href = '/runiverse';
    } else if (title === 'Equipment') {
      window.location.href = '/runiverse/equipment';
    }
  };

  return (
    <div className={className} {...rest}>
      <SectionHeader title="Runiverse Tools" subtitle="" data-aos="fade-up" />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} data-aos="fade-up">
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                onClick={() => handleClick(item.title)}
              >
                <Image
                  {...item.image}
                  alt={item.title}
                  className={classes.image}
                  lazyProps={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </CardMedia>
              <CardContent className={classes.cardContent}>
                <Typography
                  color="textPrimary"
                  variant="h6"
                  className={classes.fontWeightBold}
                >
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {isLightboxOpen && (
        <Lightbox
          mainSrc={images[imageIndex]}
          nextSrc={images[(imageIndex + 1) % images.length]}
          prevSrc={images[(imageIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsLightboxOpen(false)}
          onMovePrevRequest={() =>
            setImageIndex((imageIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setImageIndex((imageIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

Products.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
};

export default Products;
