import BB from '../img/BB.png'
import boba from '../img/boba.png'
import chew from '../img/chewbacca.png'
import darth from '../img/darth-vader.png'
import finn from '../img/finn.png'
import kylo from '../img/kylo.png'
import leia from '../img/leia.png'
import luke from '../img/luke.png'
import obi from '../img/obi-wan.png'
import poe from '../img/poe.png'
import r2c3 from '../img/r2c3.png'
import rey from '../img/rey.png'
import solo from '../img/solo.png'
import stormTrooper from '../img/stormtrooper.png'
import yoda from '../img/yoda.png'

const images = [BB, boba, darth, chew, finn, kylo, leia, luke, obi, poe, r2c3, rey, solo, stormTrooper, yoda]

export default function getImages(deck) {
    let index = Math.trunc((Math.random() * (15 - 0) + 0))
    for (let i = 0; i < deck.length; i++) {
        while (deck.filter(el => el.image === images[index]).length > 0) {
            index = Math.trunc((Math.random() * (15 - 0) + 0))
        }
    }
    return images[index]
}