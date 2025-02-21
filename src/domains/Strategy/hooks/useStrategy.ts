import { useMutation } from '@tanstack/react-query';
import useRequestIdOptions from '@/app/store/useRequestIdOptions';
import strategyApi from '../service/handler';

const useStrategy = () => {
  const setRequestIdOptions = useRequestIdOptions((store) => store.setField);
  return useMutation({
    mutationFn: strategyApi.postStrategy,
    onSuccess: (data) => {
      const { result } = data;
      setRequestIdOptions('requestId', result.requestId);
    },
    onError: () => {
      console.log('there is an error');
    },
  });
};

export default useStrategy;
