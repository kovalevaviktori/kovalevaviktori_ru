import React, { memo } from 'react';

import { StyleProps, useStyles } from './Home.styles';

interface HomeProps {}

const Home: React.FC<HomeProps> = function() {
  const styleProps: StyleProps = {};
  const classes = useStyles(styleProps);

  return (
    <div className={classes.homeContainer}>
      <p>Home</p>
    </div>
  );
};

export default memo(Home);
