import axios from 'axios';

/**
 * @param {Function} setAccessTokenLocalValue - from useLocalStorage
 * @returns
 */

const createMyAxios = async (setAccessTokenLocalValue: Function) => {
  const instance = axios.create({
    baseURL: 'http://localhost:8080',
  });

  instance.interceptors.response.use(
    // Nếu không có lỗi thì chạy bình thường
    response => {
      return response;
    },
    // Nếu trả về lỗi thì config lại để reset được access token
    error => {
      return new Promise(async resolve => {
        const originalRequest = error.config;

        // Nếu có lỗi và lỗi trả về là 401 hoặc 403 thì gửi lại request yêu cầu reset access token
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          const refreshTokenLocalValue: string =
            window.localStorage.getItem('refreshToken') || '';
          const { data } = await axios.post(
            'http://localhost:8080/auth/refresh-token',
            {
              refreshToken: JSON.parse(refreshTokenLocalValue),
            }
          );

          setAccessTokenLocalValue(data.newAccessToken);

          // Đổi lại header bằng access token mới
          originalRequest.headers.authorization = `Bearer ${data.newAccessToken}`;
          resolve(axios(originalRequest));
        }
        return Promise.reject(error);
      });
    }
  );

  return instance;
};

export default createMyAxios;
