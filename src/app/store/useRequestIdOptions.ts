import { create } from 'zustand';
import { combine } from 'zustand/middleware';

const initialState = {
  requestId: '',
};

const useRequestIdOptions = create(
  combine(initialState, (set) => ({
    setField: (
      field: keyof typeof initialState,
      value: (typeof initialState)[keyof typeof initialState],
    ) => {
      set({ [field]: value });
    },
  })),
);

export default useRequestIdOptions;
