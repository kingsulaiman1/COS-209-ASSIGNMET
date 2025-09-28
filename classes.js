// Example: Class in ES6
class Student {
    constructor(name, level) {
      this.name = name;
      this.level = level;
    }
  
    introduce() {
      return "Hi, I am " + this.name + ", a " + this.level + " student.";
    }
  }
  
  const student1 = new Student("Sulaimon", "200-level");
  console.log(student1.introduce());
  