import React, { memo } from 'react';

interface AboutProps {}

const About: React.FC<AboutProps> = function() {
  return (
    <p>About</p>
  );
};

export default memo(About);
