import { makeStyles, Theme } from '@material-ui/core';
import { Styles } from '@material-ui/core/styles/withStyles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyleProps {}

export const styles: Styles<Theme, StyleProps> = ({
  palette,
  breakpoints,
}: Theme) => ({
  loaderWrapper: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    color: palette.common.black,
  },
});

export const useStyles = makeStyles(styles);

export default styles;
