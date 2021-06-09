import getBuilding from "./getInfo/getBuilding";
interface Stus {
  id: string;
  name: string;
  roomCode: number;
  buildingName: string;
  signDate: string;
}
const divideIntoBuilding = (dividedGroup: { name: string; stus: Stus[] }) => {
  const buildings = getBuilding(dividedGroup);
  const divided = buildings.map((building) => {
    const stus2ToFormat = dividedGroup.stus.filter(
      (student) => student.buildingName === building
    );
    const stus2Formatted = stus2ToFormat.map((stu) => ({
      id: stu.id,
      name: stu.name,
      roomCode: stu.roomCode,
      signDate: stu.signDate,
    }));
    return {
      name: building,
      stus2: stus2Formatted,
    };
  });
  return divided;
};
export default divideIntoBuilding;
