import { useAllSales } from "../sale.query";
import {
  Paper, List, Box, Grid
} from '@material-ui/core';
import { SalesWidget } from "./sale-widget";

export function SalesList() {
  const variables = useAllSales();

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch,
  } = variables;

  return (
    <>
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
          {data!.map((sale,index)=>{
            return <SalesWidget sale={sale} key={sale._id}/>
          })}
        </div>
      )}
    </>
  );
}
