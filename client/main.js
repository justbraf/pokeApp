import { Template } from 'meteor/templating'
import { Session } from 'meteor/session'
import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Pokedex from 'pokedex-promise-v2';

import './main.html';

Session.set('rands', 'none nil')
const rnd = Math.ceil(Math.random() * 10)

Template.mypokes.helpers({
  randy() {
    const Poke = new Pokedex();
    Poke.getPokemonByName(rnd)
      .then((response) => {
        console.warn(response)
        Session.set('rands', response.name)
      })
      .catch((error) => {
        console.error(error)
      })
    return Session.get("rands")
  }
})