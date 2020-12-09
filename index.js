
  const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    minutes: document.querySelector('[data-value="mins"]'),
    seconds: document.querySelector('[data-value="secs"]'),
    }

    let targetDate = new Date('Jul 17, 2021').getTime();
    
   const countDown = setInterval(() => {
    let newDate = new Date().getTime();
    let time =   targetDate - newDate;
        
        let days = pad (Math.floor(time / (1000 * 60 * 60 * 24)));
        let hours = pad (Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        let minutes = pad (Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        let seconds = pad (Math.floor((time % (1000 * 60)) / 1000));
        
        refs.days.textContent = days;
        refs.hours.textContent = hours;
        refs.minutes.textContent = minutes;
        refs.seconds.textContent = seconds;
            
       }, 1000)
        
       const pad = (value) => {
           return String(value).padStart(2, '0')
       }
      