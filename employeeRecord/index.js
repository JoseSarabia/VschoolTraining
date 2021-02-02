function Workers(called, title, salary, status){
  this.called = called
  this.title = title
  this.salary = salary
  this.status = status
}

var jim = new Workers("Jim", "boss", "50000", "partime")
var brain = new Workers("Brain", "manager", "45000", "fulltime")
console.log(jim)
console.log(brain)
