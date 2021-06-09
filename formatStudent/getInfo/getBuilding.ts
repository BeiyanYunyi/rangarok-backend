interface Stus{
  id: string;
  name: string;
  roomCode: number;
  buildingName: string;
  signDate: string;
}

const getBuilding = (stuDB: {
  name: string;
  stus: Stus[];
}) => {
  const buildingSet: Set<string> = new Set();
  stuDB.stus.forEach(
    (stu: Stus) => {
      buildingSet.add(stu.buildingName);
    }
  );
  return Array.from(buildingSet);
};
export default getBuilding;
