export const formatTime = arg => {
  if(arg == undefined || isNaN(arg) || arg < 0){
    return null;
  } else {
    const ss = Math.floor(arg % 60).toString().padStart(2, '0');
    const mm = Math.floor((arg / 60) % 60).toString().padStart(2, '0');
    const hh = Math.floor((arg / 3600) % 60).toString().padStart(2, '0');

    return hh + ':' + mm + ':' + ss;
  }
};