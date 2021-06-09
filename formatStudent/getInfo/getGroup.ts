import { StudentType, StudentsType } from "../../types/stuListTypes";
const getGroup = (stuDB: StudentsType): Array<string> => {
  const groupSet: Set<string> = new Set();
  stuDB.forEach((stu:StudentType) => {
    groupSet.add(stu.groupName);
  });
  return Array.from(groupSet);
};
export default getGroup;
