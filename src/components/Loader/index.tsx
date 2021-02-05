import React, { memo } from 'react';

import { CircularProgress } from '@material-ui/core';

import { StyleProps, useStyles } from './styles';

const Loader: React.FC = function() {
  const styleProps: StyleProps = {};
  const classes = useStyles(styleProps);

  return (
    <div className={classes.loaderWrapper}>
      <CircularProgress
        size={80}
        thickness={1.8}
        classes={{
          root: classes.loader,
        }}
      />
    </div>
  );
};

export default memo(Loader);
