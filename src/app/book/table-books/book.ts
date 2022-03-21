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

export interface IBookElement extends ICartElement, IDataBook {}
