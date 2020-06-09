const instructorReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INSTRUCTOR':
      return ([...state,
        {
          id: action.gym_instructor.id,
          name: action.gym_instructor.name,
          instImage: action.gym_instructor.instImage,
          gymName: action.gym_instructor.gymName,
          trainingType: action.gym_instructor.trainingType,
          gymImage: action.gym_instructor.gymImage,
        }]);
    default:
      return state;
  }
};

export default instructorReducer;
