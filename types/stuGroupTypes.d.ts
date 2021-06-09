export interface RoomType {
  code: number;
  peoples: string[];
}
export type RoomsType = RoomType[];

export interface PlaceType {
  name: string;
  rooms: RoomsType;
}
export type PlacesType = PlaceType[];

export interface ItemofStudentsType {
  name: string;
  places: PlaceType[];
}
export type ListofStudentsType = ItemofStudentsType[];
