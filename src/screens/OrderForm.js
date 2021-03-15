import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    progressDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh'
    }
}));

function OrderForm (props) {
    const classes = useStyles(props);
    const dispatch = useDispatch();
    const orderList = useSelector(({ order }) => order.orderList);
    const orderErrorMessage = useSelector(({ order }) => order.errorMessage);

    useEffect(()=>{
        dispatch.order.getOrderList();
    }, [dispatch]);

    if (!orderList) {
        return (
            <div className={classes.progressDiv}>
                <CircularProgress />
            </div>
        );
    }

    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
};

export default OrderForm;