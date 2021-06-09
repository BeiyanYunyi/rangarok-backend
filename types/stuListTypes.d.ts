export interface StudentType {
  id: string;
  name: string;
  roomCode: number;
  buildingName: string;
  groupName: string;
  signDate: string;
}
export type StudentsType = Array<StudentType>;
