const getStoredDoctor = () => {
  const stored = localStorage.getItem("readList");
  return stored ? JSON.parse(stored) : [];
};

const addToStoredDB = (id) => {
  const stored = getStoredDoctor();
  if (!stored.includes(id)) {
    stored.push(id);
    localStorage.setItem("readList", JSON.stringify(stored));
  }
};

const removeFromStoredDB = (id) => {
  const stored = getStoredDoctor().filter((item) => item !== id);
  localStorage.setItem("readList", JSON.stringify(stored));
};

export { addToStoredDB, getStoredDoctor, removeFromStoredDB };
