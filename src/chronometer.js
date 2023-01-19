class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
    // ... your code goes here
  }

  start(printTimeCallback) {
  setInterval(()=> {
    if (typeof printTimeCallback === "function") {
      printTimeCallback();
    }
     this.currentTime++
    }, 1000)
    
    // ... your code goes here
  }

  getMinutes() {
    // ... your code goes here
  }

  getSeconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
