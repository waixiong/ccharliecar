import { ISale } from "../types";
import {
  makeStyles,
  Paper,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  widget: {
    margin: theme.spacing(2),
  },
}));

export function SalesWidget(props: {sale: ISale}) {
  const classes = useStyles();
  return (
    <Paper className={classes.widget} key={props.sale._id}>
      <div>Time: {props.sale.timestamp}</div>
      <div>SKU:   {props.sale.car.sku}</div>
      <div>Model: {props.sale.car.carModel}</div>
      <div>Price: {props.sale.car.price}</div>
    </Paper>
  );
}