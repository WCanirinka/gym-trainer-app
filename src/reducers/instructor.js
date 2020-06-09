const instructorReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INSTRUCTOR':
      return ([...state,
        {
          id: action.instructor.id,
          name: action.instructor.name,
          instImage: action.instructor.instImage,
          gymName: action.instructor.gymName,
          trainingType: action.instructor.trainingType,
          gymImage: action.instructor.gymImage,
        }]);
    default:
      return state;
  }
};

export default instructorReducer;
