export const formatDate = (a, b) => {
  if(a == undefined || isNaN(a) || a < 0 && b == undefined || isNaN(b) || b < 0){
    return null;
  }

  b += 1;

  const day = a.toString().padStart(2, '0');
  const month = b.toString().padStart(2, '0');

  return day + '-' + month;

};