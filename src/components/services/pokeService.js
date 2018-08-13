import axios from 'axios'

export default class PokeService {
     constructor(){
         this._BASE_URL = 'http://pokeapi.co/api/v2/pokemon/1/'
         this._config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };
     }
    
    AllPokemon() {
        const pokemons = [{
            id:1,
            name:'bulba',
            power:15
        },
        {
            id:2,
            name:'pikachu',
            power:17
        },
        {
            id:3,
            name:'chamander',
            power:18
        }

    ]
        return pokemons;
    }
}