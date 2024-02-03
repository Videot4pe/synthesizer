import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';
import type { JsonApiDocument } from './json-api-document';

export const getClient = (url: string) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const options: AxiosRequestConfig = {
    baseURL: `${baseUrl}/${url}`,
  };
  
  const client = axios.create(options);
  
  client.interceptors.request.use(
    (config) => {
      if (config.headers) {
        const auth = localStorage.getItem('auth')
        const token = auth?.state?.tokens?.accessToken
        config.headers.Authorization = `Bearer ${token}`;
        config.maxContentLength = Infinity;
        config.maxBodyLength = Infinity;
      }
      
      return config;
    },
    (requestError) => Promise.reject(requestError)
  );
  
  client.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest.retry) {
        originalRequest.retry = true;
        localStorage.removeItem('accessToken')
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          try {
            const { data: token  } = await axios.post('http://localhost:3010/api/v1/refresh', {refreshToken: refreshToken})
            localStorage.setItem('accessToken', token.accessToken)
            localStorage.setItem('refreshToken', token.refreshToken)
          } catch (error) {
            // window.location.href = `${
            //   import.meta.env.VITE_FRONTEND_URL
            // }/signin`;
            console.error(error);
          }
          return client(originalRequest);
        } else {
          window.location.href = '/login';
        }
      } else if (originalRequest.retry) {
        window.location.href = '/login';
      }
      return Promise.reject(error.response);
    }
  );
  
  return client;
};

class ApiClient {
  private client: AxiosInstance;
  
  constructor(baseUrl: string) {
    this.client = getClient(baseUrl);
  }
  
  get<T>(url: string, conf = {}) {
    return this.client
      .get<JsonApiDocument<T>>(this.client.defaults.baseURL + url, conf)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error));
  }
  
  delete<T>(url: string, conf = {}) {
    return this.client
      .delete<JsonApiDocument<T>>(this.client.defaults.baseURL + url, conf)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error));
  }
  
  head<T>(url: string, conf = {}) {
    return this.client
      .head<JsonApiDocument<T>>(this.client.defaults.baseURL + url, conf)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error));
  }
  
  options<T>(url: string, conf = {}) {
    return this.client
      .options<JsonApiDocument<T>>(this.client.defaults.baseURL + url, conf)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error));
  }
  
  post<T>(url: string, data: any = {}, conf = {}) {
    return this.client
      .post<JsonApiDocument<T>>(this.client.defaults.baseURL + url, data, conf)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error));
  }
  
  postMultipart<T>(url: string, data: any = {}, conf = {}) {
    return this.client
      .post<JsonApiDocument<T>>(this.client.defaults.baseURL + url, data, {
        ...conf,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error));
  }
  
  put<T>(url: string, data: any = {}, conf = {}) {
    return this.client
      .put<JsonApiDocument<T>>(this.client.defaults.baseURL + url, data, conf)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error));
  }
  
  patch<T>(url: string, data: any = {}, conf = {}) {
    return this.client
      .patch<JsonApiDocument<T>>(this.client.defaults.baseURL + url, data, conf)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error));
  }
}

export { ApiClient };
