import {Observable} from 'rxjs/Observable';
import {delay} from 'rxjs/operators';
import 'rxjs/add/observable/of';

export interface SocialInfo {
  title: string;
  img: string;
  followers: number;
  following: number;
}

export interface Weather {
  title: string;
  icon: string;
  water?: number;
  temperature: number;
}

export interface Resort {
  name: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  image: string;
  types: string[];
  weather: Weather;
  socialInfo: SocialInfo;
}

export const Resorts: Resort[] = [
  {
    name: 'Barcelona Best Hotel',
    city: 'Barcelona',
    country: 'Spain',
    address: 'Placa Cataluna, 4',
    phone: '063452859874',
    image: './assets/images/barcelona.jpg',
    types: ['Beach', 'Historic'],
    weather: {
      title: 'Excellent',
      icon: 'cloudy',
      water: 21,
      temperature: 24
    },
    socialInfo: {
      title: 'Amazing hotel and city',
      img: './assets/images/barcelona_hotel1.jpg',
      followers: 25477,
      following: 9484
    }
  },
  {
    name: 'Colón Hotel Barcelona',
    city: 'Barcelona',
    country: 'Spain',
    address: 'Placa Espana, 22',
    phone: '063452859874',
    image: './assets/images/barcelona2.jpg',
    types: ['Beach', 'Historic'],
    weather: {
      title: 'Excellent',
      icon: 'cloudy',
      water: 21,
      temperature: 24
    },
    socialInfo: {
      title: 'Amazing hotel and city',
      img: './assets/images/barcelona_hotel2.jpg',
      followers: 12384,
      following: 4567
    }
  },
  {
    name: 'Ronda Hotel 4*',
    city: 'Ronda',
    country: 'Spain',
    address: 'Calle Major, 1',
    phone: '063452859874',
    image: './assets/images/ronda.jpg',
    types: ['Mountain', 'Historic'],
    weather: {
      title: 'Amazing',
      icon: 'cold',
      temperature: 1
    },
    socialInfo: {
      title: 'Amazing hotel and city',
      img: './assets/images/ronda.jpg',
      followers: 2345,
      following: 123
    }
  },
  {
    name: 'Alpuharras Mountain View',
    city: 'Alpuharras',
    country: 'Spain',
    address: 'Calle King Arthur, 1',
    phone: '063452859874',
    image: './assets/images/alpuharras.jpg',
    types: ['Mountain'],
    weather: {
      title: 'Great',
      icon: 'cold',
      temperature: 4
    },
    socialInfo: {
      title: 'Amazing hotel and city',
      img: './assets/images/alpuharras.jpg',
      followers: 2345,
      following: 123
    }
  }
];

export const RESORTS$: Observable<Resort[]> = Observable.of(Resorts).pipe(
  delay(1000)
);

