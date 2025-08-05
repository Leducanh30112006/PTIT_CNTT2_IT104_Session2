const formatData = (date) => {
  let day = String(date.getDate());
  let month = String(date.getMonth() + 1);
  let year = String(date.getFullYear());
  return `${day < 10 ? `0` + day : day}/${
    month < 10 ? `0` + month : month
  }/${year}`;
};
export { formatData };
