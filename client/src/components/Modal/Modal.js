import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import indigo from 'material-ui/colors/indigo';


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[0],
        padding: theme.spacing.unit * 4,
    },
});

class SimpleModal extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {     
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleClick = event => {
        this.props.onClick(event);
        this.handleClose();
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
              
                <Button variant='raised' color='primary' onClick={this.handleOpen}>Close Bet</Button>
                <Modal
                    aria-labelledby="Did You Win or Lose?"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                    backgroundColor={indigo}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <Typography variant="title" id="modal-title">
                            Who Won?
                        </Typography>
                        <Button
                            variant='raised'
                            color='primary'
                            onClick={this.handleClick}
                            value={this.props.better}
                        >
                            {this.props.better}
                        </Button>
                        <Button
                            variant='raised'
                            color='primary'
                            onClick={this.handleClick}
                            value={this.props.better_two}
                        >
                            {this.props.better_two}
                        </Button>
                    </div>
                </Modal>
            </div>
        );
    }
}

SimpleModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
