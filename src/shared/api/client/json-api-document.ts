export interface Meta {
  rowsNumber: number;
  prev: number;
  from: number;
  to: number;
  current_page: number;
  last_page: number;
  total: number;
  sortBy: string;
  descending: boolean;
}

export interface MetaData<T> {
  data: T;
  meta: Meta;
}

export interface JsonApiDocument<T> {
  data: T;
  errors: JsonApiError[];
  meta?: Meta;
}

export interface JsonApiDocumentError {
  errors: JsonApiError[];
}
export interface JsonApiError {
  id?: string;
  status?: string;
  code?: string;
  title?: string;
  detail?: string;
}
