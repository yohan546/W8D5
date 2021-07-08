
class Clock {
    constructor() {
    // 1. Create a Date object.
    const time = new Date ();

    // 2. Store the hours, minutes, and seconds.

    this.hours = time.getHours();
    this.minutes = time.getMinutes();
    this.seconds = time.getSeconds();

    // 3. Call printTime.
    this.printTime();

    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000)
    }

    printTime() {
    // Format the time in HH:MM:SS
    const formatTime = [this.hours, this.minutes, this.seconds].join(":")
    // Use console.log to print it.  
    console.log(formatTime)
    }

    _tick() {
    // 1. Increment the time by one second.
    
    // 2. Call printTime.   
    }

}




const clock = new Clock();