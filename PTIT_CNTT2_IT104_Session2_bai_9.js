const user = {
  name: `Dev`,
  age: 20,
  listMonHoc: [
    { subject: `Math`, score: 9 },
    { subject: `English`, score: 7.5 },
    { subject: `Physics`, score: 6 },
    { subject: `Literature`, score: 8.5 },
  ],
};

const getStudentSummary = (student) => {
  const listMonHoc = student.listMonHoc;
  const scores = listMonHoc.map((ele) => ele.score);
  const sum = scores.reduce((acc, curr) => acc + curr, 0);
  const average =
    sum / scores.length < 5
      ? `Học sinh yếu`
      : sum / scores.length >= 8.5
      ? `Học sinh giỏi`
      : sum / scores.length >= 7
      ? `Học sinh khá`
      : `Học sinh trung bình`;
  listMonHoc.sort((a, b) => b.score - a.score);
  return `
    ${student.name} is ${student.age} years old
    Average score: ${sum / scores.length} -> ${average}
    Best subject: ${listMonHoc[0].subject} (${listMonHoc[0].score})
    Weaknest subject: ${listMonHoc[listMonHoc.length - 1].subject} (${
    listMonHoc[listMonHoc.length - 1].score
  })`;
};
console.log(getStudentSummary(user));
