
class Clock {
    constructor() {
    // 1. Create a Date object.
    const time = new Date ();

    // 2. Store the hours, minutes, and seconds.
    this.hours = 23;
    this.minutes = time.getMinutes();
    this.seconds = time.getSeconds();

    // 3. Call printTime.
    this.printTime();

    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 10)
    }

    printTime() {
    // Format the time in HH:MM:SS
    const formatTime = [this.hours, this.minutes, this.seconds].join(":")
    // Use console.log to print it.  
    console.log(formatTime)
    }

    _tick() {
    // 1. Increment the time by one second.
    
    this.seconds += 1; 
    if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes += 1;

        if (this.minutes === 60) {
            this.minutes = 0;
            this.hours += 1;

            if (this.hours === 24) {
                this.hours = 0;
            }
        }
    }    

    // 2. Call printTime.   
    this.printTime();
    }

}




const clock = new Clock();