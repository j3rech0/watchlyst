export default function dateFormat(d) {
  const dob = new Date(d);
  const dobArr = dob.toDateString().split(" ");
  const dobFormat = dobArr[1] + " " + dobArr[2] + " " + dobArr[3];
  return dobFormat;
}


