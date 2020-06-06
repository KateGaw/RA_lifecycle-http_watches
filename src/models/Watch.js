class WatchModel {
  constructor(entity) {
    Object.assign(
      this,
      {
        id: Math.random(),
        name: "",
        timeZone: 0,
      },
      entity
    );
  }
}

export default WatchModel;
