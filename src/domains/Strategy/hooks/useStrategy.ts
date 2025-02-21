import { useMutation } from '@tanstack/react-query';
import useRequestIdOptions from '@/app/store/useRequestIdOptions';
import strategyApi from '../service/handler';

const useStrategy = () => {
  const setRequestIdOptions = useRequestIdOptions((store) => store.setField);
  return useMutation({
    mutationFn: strategyApi.postStrategy,
    onSuccess: (data) => {
      const { result } = data;
      console.log('useStrategy OnSuccess', result);
      setRequestIdOptions('requestId', result.requestId);
    },
    onError: (error) => {
      console.log('there is an error');
      console.log(error);
    },
  });
};

export default useStrategy;
