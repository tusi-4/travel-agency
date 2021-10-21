export const formatTime = arg => {
  if(arg == undefined || isNaN(arg) || arg < 0){
    return null;
  } else {
    // super autorska metoda
    let ss = Math.floor(arg % 60);
    let mm = Math.floor((arg / 60) % 60);
    let hh = Math.floor((arg / 3600) % 60);
    
    let sec = ss.toString().padStart(2, '0'); //wywala błąd, bo zamieniłam to w string, czy tak?
    let min = mm.toString().padStart(2, '0');
    let hrs = hh.toString().padStart(2, '0');

    return hrs + ':' + min + ':' + sec;
  }
};