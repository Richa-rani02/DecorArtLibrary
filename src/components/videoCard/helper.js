export const isInList = (list,id) => {
    return Boolean(list.find((ele) => ele._id === id))
  }