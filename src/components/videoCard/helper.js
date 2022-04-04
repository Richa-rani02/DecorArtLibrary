export const isInList = (list,id) => {
    return (list?.find((ele) => ele._id === id))
  }