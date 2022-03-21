export interface IBookElement {
  id: number,
  title: string,
  qtyRelease: number,
  releaseDate: string,
  description: string
}

export interface ICartElement {
  id: number,
  title: string,
  description: string,
}

export interface IDataBook {
  id: number;
  releaseDate: string;
  qtyRelease: number;
}