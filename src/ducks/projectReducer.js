const initialState = {
  projects: [
    { id: "1", title: "do the things", content: "things to be done" },
    { id: "2", title: "do the things", content: "things to be done" },
    { id: "3", title: "do the things", content: "things to be done" }
  ]
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created", action.project);
      return {
        state
      };

    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.error);
      return {
        state
      };

    default:
      return state;
  }
};

export default projectReducer;
