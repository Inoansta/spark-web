import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import Storage from '@/shared/lib/storage';
import loginApi from '../service/handler';

const ACCESS_TOKEN = 'access_token';

export const useAuthToken = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginApi.postToken,
    onSuccess: (data) => {
      const { access_token } = data;
      Storage.setLocalStorage(ACCESS_TOKEN, { access_token });
      navigate('/');
    },
    onError: () => {
      navigate('/login');
    },
  });
};
