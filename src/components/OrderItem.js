import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(theme => ({
    bottomBorder: {
        borderBottom: '1.5px solid rgba(0, 0, 0, 0.15)'
    },
    orderTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    orderInProgressStatusText: {
        fontWeight: 600,
        color: '#049D4D'
    },
    orderCompletedStatusText: {
        fontWeight: 600,
        color: '#424242'
    },
    orderDateText: {
        color: '#424242'
    },
    orderNameText: {
        color: '#6E6E6E'
    },
    arrowIcon: {
        color: '#909090'
    }
}));

function OrderItem (props) {
    const classes = useStyles(props);
    const { order, isCompleted, showBottomBorder } = props;

    return (
        <ListItem className={showBottomBorder && classes.bottomBorder}>
            <ListItemAvatar>
                <Avatar src={order.logo} />
            </ListItemAvatar>
            <ListItemText
                primary={
                    <div className={classes.orderTitle}>
                        <Typography className={isCompleted ? classes.orderCompletedStatusText : classes.orderInProgressStatusText}>
                            {order.status.type}
                        </Typography>
                        { !isCompleted &&
                            <Typography className={classes.orderDateText}>
                                {'預計出貨：' + order.date}
                            </Typography>
                        }
                    </div>
                }
                secondary={
                    <Typography className={classes.orderNameText}>
                        {order.name}
                    </Typography>
                }
            />
            <ListItemSecondaryAction>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
            </ListItemSecondaryAction>
        </ListItem>
    )
};

export default OrderItem;