import { makeStyles, Theme } from '@material-ui/core';
import { Styles } from '@material-ui/core/styles/withStyles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyleProps {}

export const styles: Styles<Theme, StyleProps> = ({
  palette,
  breakpoints,
}: Theme) => ({
});

export const useStyles = makeStyles(styles);

export default styles;
