const displayUserInfo = (user) => {
  const {
    name = "Unknown",
    age = "Unknown",
    location = {},
    job = {},
    contact = {},
  } = user;
  const city = location.city ?? "Unknown";
  const country = location.country ?? "Unknown";
  const title = job.title ?? "Unknown";
  const company = job.company ?? "Unknown";
  const email = contact.email ?? "Unknown";
  const phone = contact.phone ?? "Unknown";
  return `${name} is ${age} years old, lives in ${city}, ${country}, works as ${title} at ${company}, and can be contacted via ${email} or ${phone}`;
};
console.log(
  displayUserInfo({
    name: `John`,
    age: 25,
    location: {
      city: `Hanoi`,
      country: `Vietnam`,
    },
    contact: {
      email: `john@example.com`,
      phone: `0123456789`,
    },
    job: {
      title: `Developer`,
      company: `Tech corp`,
    },
  })
);

console.log(
  displayUserInfo({
    name: "Anna",
    age: 30,
    location: { city: "Da Nang", country: "Vietnam" },
  })
);
