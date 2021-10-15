import axios, {AxiosError} from 'axios';
import { ICarInventory, IInventoryRequestDto } from './types';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const baseUrl = `${process.env.REACT_APP_API_URL===undefined? '':process.env.REACT_APP_API_URL}/api/inventory`;

export async function createInventory(input: IInventoryRequestDto): Promise<ICarInventory> {
  const url = `${baseUrl}`;
  const res = await axios.post<ICarInventory>(url, input);
  return res.data;
}

export async function getAllInventories(): Promise<ICarInventory[]> {
  const url = `${baseUrl}`;
  const res = await axios.get<ICarInventory[]>(url);
  return res.data;
}

export async function sellInventory(id: string): Promise<void> {
  const url = `/api/sale`;
  await axios.post<ICarInventory>(url, { carId: id });
}