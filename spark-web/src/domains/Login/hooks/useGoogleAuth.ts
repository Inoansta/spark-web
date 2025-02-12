import { useSuspenseQuery } from '@tanstack/react-query';
import loginApi from '../service/handler';
import loginQueryOption from '../service/queryOption';

const useGoogleAuth = () => {
  return useSuspenseQuery(loginQueryOption.googleAuth());
};

export default useGoogleAuth;
