import { AxiosError } from 'axios';
import {
  useMutation,
  useQuery,
  UseMutationOptions,
  UseQueryOptions,
  useQueryClient,
} from 'react-query';

import {
  createInventory,
  getAllInventories,
} from './inventory.service';

import { ICarInventory, IInventoryRequestDto } from './types';

export function useAllInventories() {
  const query = useQuery<ICarInventory[]>(
    ['allInventories'],
    () => getAllInventories(),
    {cacheTime: 60 * 1000},
  );
  return query;
}

export function useCreateInventory(
  config?: UseMutationOptions<
    ICarInventory,
    AxiosError,
    IInventoryRequestDto,
    unknown
  >,
) {
  const queryClient = useQueryClient();
  return useMutation(createInventory, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['allInventories']);
    },
    ...config,
  });
}
