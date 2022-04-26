export interface Movie {
  id: string;
  title: string;
  poster_path: string;
  release_date: Date;
  box_office: number | string;
  add_date: Date;
  actors: string[];
  isFavorite: boolean;
}
