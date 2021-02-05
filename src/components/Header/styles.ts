import { makeStyles, Theme } from '@material-ui/core';
import { Styles } from '@material-ui/core/styles/withStyles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyleProps {}

export const styles: Styles<Theme, StyleProps> = ({
  palette,
  breakpoints,
}: Theme) => ({
  header: {
    position: 'fixed',
    top: 0,
    height: 64,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    zIndex: 1000,
  },
  headerScroll: {
    backgroundColor: palette.common.white,
  },

  headerLogo: {
    position: 'relative',
    marginLeft: 10,
    fontSize: '2.4em',
  },

  headerMenu: {
    position: 'relative',
    display: 'flex',
    listStyle: 'none'
,  },
  headerMenuItem: {

  },
});

export const useStyles = makeStyles(styles);

export default styles;
