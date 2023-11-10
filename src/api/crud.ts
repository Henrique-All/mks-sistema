import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const resolvePath = (object: any, path: any, defaultValue?: any) =>
  path.split(".").reduce((o: any, p: any) => (o ? o[p] : defaultValue), object);

function defaultHeader(token?: string) {
  if (token) {
    return {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
    };
  }

  return {
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
  };
}

function defaultErrorCallback(err: Error | AxiosError) {
  if (axios.isAxiosError(err)) {
    throw err;
  } else {
    throw err;
  }
}

function defaultReturnCallback<T>(
  response: AxiosResponse<T>,
  returnProp?: string
): T {
  if (returnProp) {
    const responseAsAny = response.data as any;

    if (returnProp.split(".").length > 1) {
      return resolvePath(responseAsAny, returnProp) as T;
    }

    return responseAsAny[returnProp] as T;
  }

  return response.data;
}

export class Crud {
  url: string;

  constructor(url: string) {
    this.url = url;
    this.defaultGet = this.defaultGet.bind(this);
  }

  defaultGet<T>(
    endpoint: string,
    returnProp?: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return axios
      .create({
        ...config,
        headers: defaultHeader(),
      })
      .get<T>(`${this.url}/${endpoint}`)
      .then((response) => defaultReturnCallback<T>(response, returnProp))
      .catch((err: Error | AxiosError) => {
        throw defaultErrorCallback(err);
      });
  }
}
