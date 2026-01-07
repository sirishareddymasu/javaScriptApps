// Apply Method
const sInfo = {
  RollNo: 4,
  name: "siriii",
  sDetails: function (qualification, phnNumber) {
    return (
      this.RollNo + " " + this.name + " " + qualification + " " + phnNumber
    );
  },
};
const stu = {
  RollNo: 4,
  name: "siriii",
};
console.log(sInfo.sDetails.apply(stu, ["Btech", 123456789]));
