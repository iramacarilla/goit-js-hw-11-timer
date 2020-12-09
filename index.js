class CountdownTimer {
    constructor ({targetDate, selector}) {
        this.targetDate = targetDate.getTime()
        //this.daysRef = document.querySelector('[data-value="days"]')
       // this.hoursRef = document.querySelector('[data-value="hours"]')
        //this.minutesRef = document.querySelector('[data-value="mins"]')
        //this.secondsRef = document.querySelector('[data-value="secs"]')
        this.selector = document.querySelector(selector)
       this.days = ''
        this.hours = ''
        this.minutes = ''
        this.seconds = ''
        this.time = null;
    }
    pad (value) {
        return String(value).padStart(2, '0')
    }
    counter() {
        setInterval(() => {
            let time = this.targetDate - this.getCurrentTime()
            this.days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
            this.hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            this.minutes = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
            this.seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));

            this.time = time;
            this.displayData()

        }, 1000) 
    }
     
    getCurrentTime() {
        return new Date().getTime()
    }
    displayData() {
        this.selector.querySelector('[data-value="days"]').textContent = this.days;
        this.selector.querySelector('[data-value="hours"]').textContent = this.hours;
        this.selector.querySelector('[data-value="mins"]').textContent = this.minutes;
        this.selector.querySelector('[data-value="secs"]').textContent = this.seconds;

       if (this.time < 0) {
          this.selector.textContent = 'Time is over!';
          clearInterval(this.counter())
        } 
     
    }
    init() { 
        return this.counter()
    }
}

const countDown = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
  });
  countDown.init()

  const countDownDown = new CountdownTimer({
    selector: '#timer-2',
    targetDate: new Date('Dec 29, 2022'),
  });
  countDownDown.init()

  const countUpp = new CountdownTimer({
    selector: '#timer-3',
    targetDate: new Date('Jul 17, 2019'),
  });
  countUpp.init()
  