import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import "./index.css";

function index({ title, active, isRed, cases, total, ...props }) {
  return (
    <Card
      className={`infoBox ${active && "infoBox--selected"} ${isRed && 'infoBox--red'}`}
      onClick={props.onClick}
    >
      <CardContent>
        {/* Title */}
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>

        {/* +120k Number of cases */}
        <h2 className={`infoBox__cases ${!isRed &&"infoBox__cases--green"}`}>{cases}</h2>

        {/* +1.2M Total */}
        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default index;
