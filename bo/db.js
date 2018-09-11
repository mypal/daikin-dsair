let rooms = [], airCons = [];

module.exports = {
  getRooms: () => rooms,
  setRooms: (r) => {
    rooms = r;
  },
  setAirCons: (r) => {
    airCons = r
  },
  getAirCons: () => airCons
};
