const albums = {
    selected: null,
    albums: [],

    loading: false,
}


export default (state = albums, action) => {
    switch (action.type) {
        case 'albums/load/start':
            return {
                ...state,
                loading: true
            }
        case 'albums/load/success':
            return {
                ...state,
                albums: action.payload,
                loading: false
            }
        case 'albums/select':
            return {
                ...state,
                selected: action.payload
            }

        default:
            return state
    }


}