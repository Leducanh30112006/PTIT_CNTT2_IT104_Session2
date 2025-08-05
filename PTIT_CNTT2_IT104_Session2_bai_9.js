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

const getStudentSummary = ({ name, age, listMonHoc }) => {
  const scores = listMonHoc.map((ele) => ele.score);
  const sum = scores.reduce((acc, curr) => acc + curr, 0);
  const avg = +(sum / scores.length).toFixed(2);
  const rank =
    avg < 5
      ? "Học sinh yếu"
      : avg >= 8.5
      ? "Học sinh giỏi"
      : avg >= 7
      ? "Học sinh khá"
      : "Học sinh trung bình";

  const sorted = [...listMonHoc].sort((a, b) => b.score - a.score);
  const best = sorted[0];
  const worst = sorted[sorted.length - 1];

  return `${name} is ${age} years old
Average score: ${avg} - ${rank}
Best subject: ${best.subject} (${best.score})
Weakest subject: ${worst.subject} (${worst.score})`;
};

console.log(getStudentSummary(user));
