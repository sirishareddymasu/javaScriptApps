// This keyword
const empInfo = {
  eFirstName: "sirisha",
  eLastName: "chowdary",
  FullName: function () {
    return this.eFirstName + " " + this.eLastName;
  },
};
console.log(empInfo.FullName());
