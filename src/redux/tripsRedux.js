/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  if(filters.days){
    const pattern = new RegExp(filters.days, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by tags
  if(filters.tags){
    const pattern = new RegExp(filters.tags, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - sort by cost descending (most expensive goes first)
  if(filters.cost){
    const pattern = new RegExp(filters.cost, 'i');
    output = output.filter(trip => pattern.test(trip.name));
    // most expensive first
    // output.sort(function(a, b){return b - a}); ???????
  }

  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips;

  // TODO - filter trips by tripId
  filtered.filter(trip => trip.trip.id == tripId); // filtered.filter?? DRAMA

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips;
  
  // TODO - filter trips by countryCode
  filtered.filter(trip => trip.country.code == countryCode); // DRAMA 2
 
  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
