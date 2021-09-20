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
  const from = filters.duration.from;
  const to = filters.duration.to;
  output = output.filter(trip => trip.days >= from && trip.days <= to);

  // TODO - filter by tags
  if(filters.tags.length){
    const tags = filters.tags;
    output = output.filter(trip => tags.every(tag => trip.tags.includes(tag)));
  }

  // TODO - sort by cost descending (most expensive goes first)


  return output;
};

export const getTripById = ({trips}, tripId) => {
  // tu orginalnie bylo > const filtered = trips; < ale boje sie zmienic const na let, a poza tym toooo jakies maslo maslane mi wychodzi
  const filtered = trips.filter(trip => trip.id == tripId); // :O dziala! bo miszczu podpowiedzial
  // TODO - filter trips by tripId

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips.filter(trip => trip.country.code == countryCode);
 
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
