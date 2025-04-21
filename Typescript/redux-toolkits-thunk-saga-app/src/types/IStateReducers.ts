export interface IStateReducer<T> {
  loading: boolean;
  data?: T;
  error?: string | null;
}
