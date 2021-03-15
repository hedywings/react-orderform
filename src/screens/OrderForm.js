import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle'; 
import { OrderItem } from '../components';

import clsx from 'clsx';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
    center: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressDiv: {
        width: '100vw',
        height: '100vh'
    },
    list: {
        border: '1.5px solid rgba(0, 0, 0, 0.15)',
        width: '30%'
    },
    listSubheader: {
        backgroundColor: '#F5F5F5',
        borderBottom: '1.5px solid rgba(0, 0, 0, 0.15)',
        color: '#3C3C3C',
        fontWeight: 600
    },
    listSubheaderDiv: {
        backgroundColor: '#009F49', 
        width: '6px', 
        height: '3.8vh',
        marginRight: 10
    },
    orderTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}));

function OrderForm (props) {
    const classes = useStyles(props);
    const dispatch = useDispatch();
    const orderList = useSelector(({ order }) => order.orderList);
    const orderErrorMessage = useSelector(({ order }) => order.errorMessage);

    const [inProgressOrders, setInProgressOrder] = useState([]);
    const [completedOrders, setCompletedOrder] = useState([]);

    useEffect(()=>{
        dispatch.order.getOrderList();
    }, [dispatch]);

    useEffect(()=>{
        if (orderList) {
            let ordersInProgress = orderList.filter((item)=>{
                const statusCode = item.status.code;
                return ((statusCode === 1) || (statusCode === 2));
            }).sort((itema, itemb)=>{
                return moment(itema.date).isBefore(itema.itemb)
            });

            let ordersCompleted = orderList.filter((item)=>{
                const statusCode = item.status.code;
                return ((statusCode === 3) || (statusCode === 4));
            }).sort((itema, itemb)=>{
                return moment(itema.date).isBefore(itema.itemb)
            });

            setInProgressOrder(ordersInProgress);
            setCompletedOrder(ordersCompleted);
        }
    }, [orderList]);

    if (!orderList) {
        return (
            <div className={clsx(classes.progressDiv, classes.center)}>
                <CircularProgress />
            </div>
        );
    }

    return (
        <div className={classes.center}>
            { orderErrorMessage &&
                <Alert severity="error" onClose={() => {dispatch.order.clearErrorMessage()}}>
                    <AlertTitle>Error</AlertTitle>
                    {orderErrorMessage}
                </Alert>
            }
            <List disablePadding className={classes.list}> 
                <ListItem className={classes.listSubheader}>
                    <div className={classes.listSubheaderDiv} />
                    進行中
                </ListItem>
                {
                    inProgressOrders.map((order)=>{
                        return (
                            <OrderItem order={order} isCompleted={false} showBottomBorder={true} />
                        )
                    })
                }

                <ListItem className={classes.listSubheader}>
                    <div className={classes.listSubheaderDiv} />
                    已完成
                </ListItem>
                {
                    completedOrders.map((order, index)=>{
                        return (
                            <OrderItem order={order} isCompleted={true} showBottomBorder={!((index + 1) === completedOrders.length)} />
                        )
                    })
                }
            </List>
        </div>
    )
};

export default OrderForm;