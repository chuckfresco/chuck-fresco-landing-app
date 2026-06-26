import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, colors } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { CardBase, DescriptionListIcon } from 'components/organisms';
import { IconAlternate } from 'components/molecules';

const Features = props => {
  const { data, className, ...rest } = props;

  return (
    <div className={className} data-aos="fade-up" {...rest}>
      <SectionHeader title="Runiverse Tools" fadeUp />
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={6}
            md={4}
            data-aos="fade-up"
          >
            <CardBase liftUp variant="outlined" withShadow>
              <DescriptionListIcon
                icon={
                  item.image ? (
                    <a href={item.link || '#'} style={{ display: 'inline-block' }}>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: 125,
                          height: 125,
                          objectFit: 'contain',
                          borderRadius: '10%',
                          backgroundColor: 'rgba(255,255,255,0.08)',
                          border: '1px solid silver',
                          padding: 3,
                          boxShadow: '0 0 6px rgba(0,0,0,0.3)',
                        }}
                      />
                    </a>
                  ) : (
                    <IconAlternate
                      fontIconClass={item.icon}
                      color={colors.indigo}
                    />
                  )
                }
                title={item.title}
                subtitle={item.description}
              />
            </CardBase>
          </Grid>
        ))}

      </Grid>
    </div>
  );
};

Features.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
};

export default Features;
