import { ICarInventory } from "../types";
import {
  makeStyles,
  Paper,
} from '@material-ui/core';
import { Button } from "@material-ui/core";
import { useCreateSale } from "../../sale/sale.query";

const useStyles = makeStyles((theme) => ({
  widget: {
    margin: theme.spacing(2),
  },
}));

export function InventoryWidget(props: {car: ICarInventory}) {
  const classes = useStyles();
  const create = useCreateSale();

  function handleSell(event: any) {
    event.preventDefault();
    create.mutate(props.car._id!, {
      onError: (e) => {
        console.error(e);
      },
    });
  }

  return (
    <Paper className={classes.widget} key={props.car._id}>
      <div>Time: {props.car.timestamp}</div>
      <div>SKU:   {props.car.sku}</div>
      <div>Model: {props.car.carModel}</div>
      <div>Price: {props.car.price}</div>
      <Button color="primary" disabled={create.isLoading} onClick={handleSell}> Sell </Button>
    </Paper>
  );
}