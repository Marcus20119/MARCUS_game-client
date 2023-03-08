import { createSlice } from '@reduxjs/toolkit';

const getLocalStorage = (key: string, initialValue: string) => {
  if (typeof window === 'undefined') {
    return initialValue;
  }
  try {
    // Lấy từ Local Storage
    const item = window.localStorage.getItem(key);
    // Nếu có trong Local Storage thì parse ra, nếu không thì lấy giá trị initial
    return item ? JSON.parse(item) : initialValue;
  } catch (error) {
    // Nếu lỗi thì cũng trả về giá trị initial
    console.log(error);
    return initialValue;
  }
};

type Game = 'Wordle' | '';
type UserData = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  role?: string | null;
  phoneNumber?: string | null;
  gender?: boolean | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
} | null;

const initialState: {
  currentGame: Game;
  showAuthModal: boolean;
  authType: 'Sign In' | 'Sign Up';
  accessToken: string;
  refreshToken: string;
  userData: UserData;
} = {
  currentGame: 'Wordle',
  showAuthModal: false,
  authType: 'Sign In',
  accessToken: getLocalStorage('accessToken', ''),
  refreshToken: getLocalStorage('refreshToken', ''),
  userData: null,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeGame: (state, { payload }: { payload: Game }) => ({
      ...state,
      currentGame: payload,
    }),
    showAuthModal: state => ({
      ...state,
      showAuthModal: true,
    }),
    hideAuthModal: state => ({
      ...state,
      showAuthModal: false,
    }),
    changeAuthType: (
      state,
      { payload }: { payload: 'Sign In' | 'Sign Up' }
    ) => ({
      ...state,
      authType: payload,
    }),
    setLocalStorage: (
      state,
      {
        payload,
      }: { payload: { key: 'accessToken' | 'refreshToken'; value: string } }
    ) => {
      try {
        // Save to local storage
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(
            payload.key,
            JSON.stringify(payload.value)
          );
        }
        return {
          ...state,
          [payload.key]: payload.value,
        };
      } catch (error) {
        console.log(error);
        return state;
      }
    },
    setUserData: (state, { payload }: { payload: UserData }) => ({
      ...state,
      userData: { ...state.userData, ...payload },
    }),
  },
});

// Action creators are generated for each case reducer function
export const {
  changeGame,
  showAuthModal,
  hideAuthModal,
  changeAuthType,
  setLocalStorage,
  setUserData,
} = mainSlice.actions;

export default mainSlice.reducer;
