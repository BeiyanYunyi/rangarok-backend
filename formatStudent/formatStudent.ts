import { StudentsType } from "../types/stuListTypes";
import divideIntoBuilding from "./divideIntoBuilding";
import divideIntoGroup from "./divideIntoGroup";
import divideIntoRoom from "./divideIntoRoom";

export const fmtStudentsIntoGroup = (stuDB: StudentsType) => {
  return divideIntoGroup(stuDB);
};

export const fmtStudentsIntoBuilding = (stuDB: StudentsType) => {
  const fmtedGroup = fmtStudentsIntoGroup(stuDB);
  const fmtedBuilding = fmtedGroup.map((group) => {
    return { name: group.name, stus: divideIntoBuilding(group) };
  });
  return fmtedBuilding;
};

export const fmtStudentsIntoRoom = (stuDB: StudentsType) => {
  const fmtedBuilding = fmtStudentsIntoBuilding(stuDB);
  const fmtedRoom = fmtedBuilding.map(
    (group: { name: string; stus: any[] }) => {
      return {
        name: group.name,
        places: group.stus.map((building) => {
          return { name: building.name, rooms: divideIntoRoom(building) };
        }),
      };
    }
  );
  return fmtedRoom;
};
