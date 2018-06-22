class GameTimer {
  constructor(time = 0, callBack) {
    this.time = time;
    this.callBack = callBack;
  }
  tick() {
    this.time--;
    if (this.time < 1) {
      this.callBack();
    }
  }

}

export default GameTimer;
