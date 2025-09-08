import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";

axios.defaults.baseURL = "/api";

const useFetch = <T>(url: string, params: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse<T>>();
  const [error, setError] = useState<AxiosError>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const asyncFatchData = async () => {
    setResponse(undefined);
    setIsLoading(true);
    try {
      const response: AxiosResponse<T> = await axios.get<T>(url, params);
      setResponse(response);
    } catch (error) {
      setError(error as unknown as AxiosError);
    } finally {
      setIsLoading(false);
    }
  };

  const requestData = () => {
    asyncFatchData();
  };

  return { response, error, isLoading, requestData };
};

export { useFetch };
