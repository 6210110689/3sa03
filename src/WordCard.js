import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import _, { attempt } from 'lodash';

const prepareStateFromWord = (given_word) => {
 let word = given_word.toUpperCase()
 let chars = _.shuffle(Array.from(word))
 return {
 word,
 chars,
 attempt: 1,
 guess: '',
 count: 1,
 completed: false
 }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = c => {    
         console.log(`${c} has been activated.`)

         let guess = state.guess + c
         setState({...state, guess})

         if(guess.length == state.word.length){
             if(guess == state.word){
                 console.log('yeah!')
                 setState({...state, completed: true, count: state.count + 1})
                 console.log(`${state.count}`)
                 alert(`yeah! ${state.word} Complete`);
                
             }else{
                 console.log('reset, next attempt')
                 setState({...state, guess: '', attempt: state.attempt + 1})
                 console.log(`${state.attempt}`)
                 if(state.attempt == 3){
                    alert(`FAIL! It is "${state.word}" `);
                    setState({...state, completed: true})
                 }
             }
         }

         console.log(guess)
    }
    return(
        <div>
            { state.chars.map((c, i) => 
                <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
              ) 
            }
        </div>
    )
}