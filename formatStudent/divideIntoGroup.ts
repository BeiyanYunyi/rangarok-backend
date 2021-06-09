import getGroup from "./getInfo/getGroup";
import { StudentsType } from "../types/stuListTypes";
const divideIntoGroup = (stuDB: StudentsType) => {
  const groups = getGroup(stuDB);
  const divided = groups.map((group) => {
    const stusToFormat = stuDB.filter((student) => student.groupName === group);
    const stusFormatted = stusToFormat.map((stu) => ({
      id: stu.id,
      name: stu.name,
      roomCode: stu.roomCode,
      buildingName: stu.buildingName,
      signDate: stu.signDate,
    }));
    return {
      name: group,
      stus: stusFormatted,
    };
  });
  return divided;
};
export default divideIntoGroup;
