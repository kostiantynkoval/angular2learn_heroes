import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];
    let heroesqq = [
      {id: 21, name: 'Gqwerwer'},
      {id: 22, name: 'Weert'},
      {id: 23, name: 'Bsgsgo'},
      {id: 24, name: 'Cfdgdfgdfg'},
      {id: 25, name: 'Msdfgsdfg'},
      {id: 26, name: 'Rsdfg'},
      {id: 27, name: 'Dgf'},
      {id: 28, name: 'dfgsdfgsfg'},
      {id: 29, name: 'Mfgdfgdf'},
      {id: 30, name: 'Tdddddddd'}
    ];
    return {heroes, heroesqq};
  }
}
