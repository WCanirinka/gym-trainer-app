import axios from 'axios';

const createClass = async props => {
  const {
    instID, userID, classTime, status,
  } = props;

  const url = 'https://trainers-appointment-api.herokuapp.com/gym_classes/';
  const params = `instructor_id=${instID}&user_id=${userID}&classTime=${classTime}&status=${status}`;

  const response = await axios.post(`${url}?${params}`);
  return response.data;
};

const getClasses = async () => {
  const url = 'https://trainers-appointment-api.herokuapp.com/gym_classes/';

  const response = await axios.get(url);
  return response.data;
};

const deleteClass = async id => {
  const url = 'https://trainers-appointment-api.herokuapp.com/gym_classes/';

  const response = await axios.delete(`${url}${id}`);
  return response.data;
};

export { createClass, getClasses, deleteClass };
