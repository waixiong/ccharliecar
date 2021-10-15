import { ISale } from "./types";
import axios, {AxiosError} from 'axios';

const baseUrl = `${process.env.REACT_APP_API_URL===undefined? '':process.env.REACT_APP_API_URL}/api/sale`;

export async function sellInventory(id: string): Promise<void> {
  console.log('selling')
  const url = `${baseUrl}`;
  await axios.post(url, { carId: id });
}

export async function getAllSales(): Promise<ISale[]> {
  console.log(baseUrl);
  const url = `${baseUrl}`;
  const res = await axios.get<ISale[]>(url);
  return res.data;
}