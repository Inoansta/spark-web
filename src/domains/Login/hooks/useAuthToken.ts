import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { Storage } from '@/shared/lib';
import loginApi from '../service/handler';

export const TOKEN = {
  ACCESS: 'access_token',
  REFRESH: 'refresh_token',
};

export const useAuthToken = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginApi.postToken,
    onSuccess: (data) => {
      const { access_token, refresh_token } = data;
      Storage.setLocalStorage(TOKEN.ACCESS, access_token);
      Storage.setLocalStorage(TOKEN.REFRESH, refresh_token);
      navigate('/');
    },
    onError: () => {
      navigate('/login');
    },
  });
};
