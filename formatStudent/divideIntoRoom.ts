import getRoom from "./getInfo/getRoom";

interface Stus2 {
  id: string;
  name: string;
  roomCode: number;
  signDate: string;
}
const divideIntoRoom = (dividedBuilding: { name: string; stus2: Stus2[] }) => {
  const rooms = getRoom(dividedBuilding.stus2);
  const dividedRoom = rooms.map((room: number) => {
    const stus3ToFormat = dividedBuilding.stus2.filter(
      (student) => student.roomCode === room
    );
    const stus3Formatted = stus3ToFormat.map((stu) => ({
      id: stu.id,
      name: stu.name,
      signDate: stu.signDate,
    }));
    return { code: room, peoples: stus3Formatted };
  });
  return dividedRoom;
};

export default divideIntoRoom;
