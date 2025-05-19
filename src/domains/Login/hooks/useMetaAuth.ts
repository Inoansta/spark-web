import { useSuspenseQuery } from '@tanstack/react-query';
import loginQueryOption from '../service/queryOption';

const useMetaAuth = () => {
  return useSuspenseQuery(loginQueryOption.metaAuth());
};

export default useMetaAuth;
