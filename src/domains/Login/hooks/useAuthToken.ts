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
      Storage.setLocalStorage(TOKEN.ACCESS, data.access_token);

      if (data.refresh_token) {
        Storage.setLocalStorage(TOKEN.REFRESH, data.refresh_token);
      }
      navigate('/');
    },
    onError: () => {
      navigate('/login');
    },
  });
};
