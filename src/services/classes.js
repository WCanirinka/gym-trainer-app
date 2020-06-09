import axios from 'axios';

const url = 'https://trainers-appointment-api.herokuapp.com/gym_classes';

const createClass = async props => {
  const {
    instuctorID, userID, classTime, status,
  } = props;

  const params = `gym_instructors_id=${instuctorID}&users_id=${userID}&classTime=${classTime}&status=${status}`;

  const response = await axios.post(`${url}?${params}`);
  return response.data;
};

const getClasses = async () => {
  const response = await axios.get(url);
  return response.data;
};

const deleteClass = async id => {
  const response = await axios.delete(`${url}${id}`);
  return response.data;
};

export { createClass, getClasses, deleteClass };
