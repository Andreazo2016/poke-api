import axios from 'axios'

export default class PokeService {
     constructor(){
         this._BASE_URL = 'http://pokeapi.co/api/v2/pokemon/1/'
         this._config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };
     }
    
    AllGames() {
        const pokemons = [{
            id:1,
            name:'God Of War',
            midia:'Física'
        },
        {
            id:2,
            name:'Gear Of War',
            midia:'Física'
        },
        {
            id:3,
            name:'Residente Evil',
            midia:'Física'
        }

    ]
        return pokemons;
    }
}