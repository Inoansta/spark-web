import { useSuspenseQuery } from '@tanstack/react-query';
import loginQueryOption from '../service/queryOption';

const useGoogleAuth = () => {
  return useSuspenseQuery(loginQueryOption.googleAuth());
};

export default useGoogleAuth;
