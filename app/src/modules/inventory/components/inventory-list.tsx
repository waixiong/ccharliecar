import { useAllInventories, useCreateInventory } from "../inventories.query";
import { InventoryWidget } from "./inventory-widget";
import { Button, TextField, Typography } from "@material-ui/core";
import { useState } from "react";

export function InventoriesList() {
  const variables = useAllInventories();
  const create = useCreateInventory();

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch,
  } = variables;

  const [sku, setSku] = useState('');
  const [price, setPrice] = useState('');
  const [model, setModel] = useState('');
  const [name, setName] = useState('');

  function handleSubmit(event: any) {
    event.preventDefault();
    create.mutate({
      sku: sku,
      price: parseFloat(price),
      model: model,
      name: name,
    }, {
      onError: (e) => {
        console.error(e);
      },
    });
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} >
          <TextField
            label="SKU" variant="filled"
            value={sku}
            onChange={ e => setSku(e.target.value)}
          />
          <TextField
            label="Price" variant="filled"
            value={price}
            type="number"
            onChange={ e => setPrice(e.target.value)}
          />
          <TextField
            label="Model" variant="filled"
            value={model}
            onChange={ e => setModel(e.target.value)}
          />
          <TextField
            label="Name" variant="filled"
            value={name}
            onChange={ e => setName(e.target.value)}
          />
          <Typography/>
          <Button type="submit" variant="contained" disabled={create.isLoading}>
            add car
          </Button>
        </form>
      </div>
      {isLoading && (
        <div>
          loading...
        </div>
      )}
      {isError && (
        <div>
          Error on loading all inventories, { String(error) }
        </div>
      )}
      {isSuccess && (
        <div>
          {data!.map((car,index)=>{
            return <InventoryWidget car={car} key={car._id}/>
          })}
        </div>
      )}
    </>
  );
}
