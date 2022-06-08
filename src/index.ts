import User from './User';
import Company from './Company';
import CustomMap from './CustomMap';

// billing is required to use maps api
// following is a free to use one
// const API_KEY = 'AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU';

const user = new User();
const company = new Company();

const map = new CustomMap('map');
map.addMarker(user);
map.addMarker(company);
