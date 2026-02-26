// countdown.js
export default class Countdown {
  constructor(targetDate = 'March 21, 2026 00:00:00') {
    this.target = new Date(targetDate).getTime();
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this._updateCountdown();
  }

  // Private method to calculate countdown
  _updateCountdown() {
    const now = new Date().getTime();
    const distance = this.target - now;

    if (distance < 0) {
      // Time passed
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      return;
    }

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }

  // Public method to get current countdown
  getCountdown() {
    this._updateCountdown();
    return {
      days: this.days,
      hours: this.hours,
      minutes: this.minutes,
      seconds: this.seconds
    };
  }

  // Public method to start live countdown with a callback
  start(callback, interval = 1000) {
    this._updateCountdown();
    callback(this.getCountdown());

    this._timer = setInterval(() => {
      this._updateCountdown();
      callback(this.getCountdown());
    }, interval);
  }

  // Stop live countdown
  stop() {
    clearInterval(this._timer);
  }
}