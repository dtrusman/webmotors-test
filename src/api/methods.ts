import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

type APIReturn<T> = [Error | null, T | null];

export async function get<T = any>(
  url: string,
  config?: AxiosRequestConfig,
  response?: boolean,
): Promise<APIReturn<T>> {
  try {
    const request: AxiosResponse<T> = await instance.get(url, config);
    if (request.data instanceof Error) {
      throw request.data;
    }
    return [null, response ? ((request as any) as T) : request.data];
  } catch (error) {
    return [error, null];
  }
}

export async function post<T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
  response?: boolean,
): Promise<APIReturn<T>> {
  try {
    const request: AxiosResponse<T> = await instance.post(url, data, config);
    if (request.data instanceof Error) {
      throw request.data;
    }
    return [null, response ? ((request as any) as T) : request.data];
  } catch (error) {
    return [error, null];
  }
}

export async function put<T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
  response?: boolean,
): Promise<APIReturn<T>> {
  try {
    const request: AxiosResponse<T> = await instance.put(url, data, config);
    if (request.data instanceof Error) {
      throw request.data;
    }
    return [null, response ? ((request as any) as T) : request.data];
  } catch (error) {
    return [error, null];
  }
}

export async function del(url: string, config?: AxiosRequestConfig): Promise<APIReturn<number>> {
  try {
    const request: AxiosResponse = await instance.delete(url, config);
    if (request.data instanceof Error) {
      throw request.data;
    }
    return [null, request.status];
  } catch (error) {
    return [error, null];
  }
}
