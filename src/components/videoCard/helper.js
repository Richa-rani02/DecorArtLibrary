export const isInList = (list,id) => {
  console.log(list,id);
    return Boolean(list.find((ele) => ele._id === id))
  }