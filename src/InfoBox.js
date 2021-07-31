import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import './InfoBox.css';

const InfoBox = ({ title, cases, isRed, active, total, ...props }) => {
    return (
        <Card onClick={props.onClick} className={`infoBox ${active && "infoBox--selected"} 
        ${isRed && "infoBox--red"}`}>
            <CardContent>
                <Typography className="infoBox_title" color="textSecondary">
                    {title}
                </Typography>
                <h2 className={`infoBox_cases ${!isRed && "infoBox_cases--green"}`}>{cases}
                <small style={{'marginLeft': '13px', 'color': 'grey', 'fontSize': '20px'}}>Today's Total</small></h2>
                <Typography className="infoBox_total" color="textSecondary">
                    <h2>{total}<small style={{'marginLeft': '10px', 'color': 'grey', 'fontSize': '18px'}}>Total</small></h2>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default InfoBox;