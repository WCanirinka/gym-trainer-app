const instructorReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INSTRUCTOR':
      return ([...state,
        {
          id: action.instructor.id,
          name: action.instructor.name,
          instImage: action.instructor.instImage,
          dragonName: action.instructor.gymName,
          dragonType: action.instructor.trainingType,
          dragonImage: action.instructor.gymImage,
        }]);
    default:
      return state;
  }
};

export default instructorReducer;
