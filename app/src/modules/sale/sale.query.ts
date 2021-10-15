import { AxiosError } from 'axios';
import {
  useMutation,
  useQuery,
  UseMutationOptions,
  UseQueryOptions,
  useQueryClient,
} from 'react-query';

import {
  sellInventory,
  getAllSales,
} from './sale.service';

import { ISale } from './types';

export function useAllSales() {
  const query = useQuery<ISale[]>(
    ['allSales'],
    () => getAllSales(),
    {cacheTime: 60 * 1000},
  );
  return query;
}

export function useCreateSale(
  config?: UseMutationOptions<
    void,
    AxiosError,
    string,
    unknown
  >,
) {
  const queryClient = useQueryClient();
  return useMutation(sellInventory, {
    onSuccess: (data, _id) => {
      queryClient.invalidateQueries(['allSales']);
      queryClient.invalidateQueries(['allInventories']);
    },
    ...config,
  });
}
