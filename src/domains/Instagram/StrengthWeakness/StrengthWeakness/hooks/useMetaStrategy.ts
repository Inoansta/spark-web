import { useMutation } from '@tanstack/react-query';
import useRequestIdOptions from '@/app/store/useRequestIdOptions';
import metaStrategyApi from '@/domains/Instagram/StrengthWeakness/StrengthWeakness/service/handler';

const useMetaStrategy = () => {
  const setRequestIdOptions = useRequestIdOptions((store) => store.setField);
  return useMutation({
    mutationFn: metaStrategyApi.postStrategy,
    onSuccess: (data) => {
      const result = data;
      setRequestIdOptions('requestId', result.requestId);
    },
    onError: (error) => {
      console.log('there is an error');
      console.log(error);
    },
  });
};

export default useMetaStrategy;
