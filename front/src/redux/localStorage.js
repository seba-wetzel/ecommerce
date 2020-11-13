export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {}
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");

    if (serializedState === null) {
      return undefined;
    }
    const state = JSON.parse(serializedState);
    console.log();
    return state;
  } catch (err) {
    return undefined;
  }
};
