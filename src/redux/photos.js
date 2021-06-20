const photos = {
  filter: '',
  items: [],
  loading: false,
};

export default (state = photos, action) => {
  switch (action.type) {
    case 'photos/load/start':
      return {
        ...state,
        loading: true,
      };
    case 'photos/load/success':
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case 'filter/set':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
