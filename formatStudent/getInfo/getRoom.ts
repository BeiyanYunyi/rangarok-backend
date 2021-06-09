interface Stus {
  id: string;
  name: string;
  roomCode: number;
  signDate: string;
}

const getRoom = (stus2: Stus[]) => {
  const roomSet: Set<number> = new Set();
  stus2.forEach((stu: Stus) => {
    roomSet.add(stu.roomCode);
  });
  return Array.from(roomSet);
};
export default getRoom;
