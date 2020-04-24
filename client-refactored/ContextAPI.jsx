import React, { createContext, useReducer, useState, useCallback } from "react";

export const Context = createContext();

const ADD_TEST_SUITE = "ADD_TEST_SUITE";
const UPDATE_TEST_SUITE = "UPDATE_TEST_SUITE";
const DELETE_TEST_SUITE = "DELETE_TEST_SUITE";

const reducer = (state, action) => {
  if (action.type == ADD_TEST_SUITE) {
    console.log("added to test suite", action.payload);
    return [...state, action.payload];
  }

  if (action.type == UPDATE_TEST_SUITE) {
    const copy = [...state];
    const updateState = copy.filter((test) => test.id == action.payload.id)[0];
    const index = copy.indexOf(updateState);
    copy[index] = action.payload;
    return copy;
  }

  if (action.type == DELETE_TEST_SUITE) {
    return state.filter((test) => test.id != action.payload);
  }

  return state;
};

export const ContextProvider = ({ children }) => {
  const [testSuites, dispatch] = useReducer(reducer, []);
  const [editTest, setEditTest] = useState([]);
  const [addUpdateToggle, setAddUpdateToggle] = useState(true);

  const addTestSuite = useCallback(
    (test) => {
      dispatch({ type: ADD_TEST_SUITE, payload: test });
    },
    [dispatch]
  );

  const updateTestSuite = useCallback(
    (test) => {
      dispatch({ type: UPDATE_TEST_SUITE, payload: test });
    },
    [dispatch]
  );

  const deleteTestSuite = useCallback(
    (id) => {
      dispatch({ type: DELETE_TEST_SUITE, payload: id });
    },
    [dispatch]
  );

  const value = {
    testSuites,
    addUpdateToggle,
    addTestSuite,
    updateTestSuite,
    deleteTestSuite,
    setAddUpdateToggle,
    setEditTest,
    editTest,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
