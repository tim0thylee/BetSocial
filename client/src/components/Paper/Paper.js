import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 50,
    marginTop: theme.spacing.unit * 3,
  }),
});

function PaperSheet(props) {
  const { classes, children } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        {children}
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);