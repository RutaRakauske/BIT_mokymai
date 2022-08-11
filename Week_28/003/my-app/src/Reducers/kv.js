//Reducers gives 2 variables - state(same as useState), action
function kv(state, action) {

    let stateCopy = [...state];

    switch (action.type) {
        case 'plus_one':
            action.payload = action.payload === '' ? [...state].length : parseInt(action.payload)
            action.payload = isNaN(action.payload) ? [...state].length : parseInt(action.payload)
            // return [...state, {kvNumb: action.payload}];
            stateCopy.push({number: action.payload, show: true})
            // return [...state, 1];
            break;
        case 'minus_one':
            stateCopy.shift();
            // return [...state].slice(0, -1);
            break;
        case 'sort_a':
            stateCopy.sort((a, b) => b.number - a.number)
            break;
        case 'sort_d':
            stateCopy.sort((a, b) => a.number - b.number)
            break;
        case 'even':
            stateCopy = stateCopy.map(s => s.number % 2 === 0 ? {...s} : {...s, show: false})
            break;
        case 'noteven':
            stateCopy = stateCopy.map(s => s.number % 2 !== 0 ? {...s} : {...s, show: false})
            break;
        case 'all':
            stateCopy = stateCopy.map(s => ({...s, show: true}))
            break;
        case 'default':
            break;
        default:
    }

    //funkcija grazina pakeista state, visada turi grazinti state
    return stateCopy;

}

export default kv;