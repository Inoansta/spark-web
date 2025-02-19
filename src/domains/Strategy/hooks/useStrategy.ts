import { useMutation } from '@tanstack/react-query';
import strategyApi from '../service/handler';

const useStrategy = () => {
  return useMutation({
    mutationFn: strategyApi.postStrategy,
  });
};

export default useStrategy;
