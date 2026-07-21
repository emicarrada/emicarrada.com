// API service interfaces
export interface IApiService {
  get<T>(endpoint: string): Promise<T>;
  post<T, U>(endpoint: string, data: U): Promise<T>;
  put<T, U>(endpoint: string, data: U): Promise<T>;
  delete<T>(endpoint: string): Promise<T>;
}
