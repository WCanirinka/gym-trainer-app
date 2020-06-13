import axios from 'axios';

const url = 'https://trainers-appointment-api.herokuapp.com/gym_instructors/';

const createInstructor = async props => {
  const {
    name, instImage, gymName, trainingType, gymImage,
  } = props;

  const params = `name=${name}&instImage=${instImage}&gymName=${gymName}&trainingType=${trainingType}&gymImage=${gymImage}`;

  const response = await axios.post(`${url}?${params}`);
  return response;
};

const getInstructors = async () => {
  const response = await axios.get(url);
  return response.data;
};

export { createInstructor, getInstructors };
