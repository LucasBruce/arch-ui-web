export interface ApiInterface {
  post<S>(arg: { path: string }): Promise<S>;
}
