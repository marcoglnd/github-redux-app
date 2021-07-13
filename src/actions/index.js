// Coloque aqui suas actions
export const GET_USER = 'GET_USER';

export const getUser = (data) => ({
  type: GET_USER,
  payload: data,
})

export const fetchData = (user) => (dispatch) => {
  return fetch(`https://api.github.com/search/users?q=${user}&per_page=5`)
    .then((result) => result.json())
    .then((data) => dispatch(getUser(data)));
};
