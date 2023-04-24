let option
let students = [] // must be out of the While, otherwise the array will restart after every case done
let studentName
while (option != 5){

  option = Number(prompt (`Let's calculate your student's grade. Choose one of the options:)

  1. Add new student (name and 3 grades. E.g. Anne,6,7,8)
  2. Calculate each student's grade and their approval
  3. Check the submitted information
  4. Erase information of the previous student
  5. Exit the program

  `))
  
  switch (option){
    case 1:
      let newStudent = prompt(`  Write the student's name,first grade, second grade, third grade separated by commas as you just read. 
      Note that the grades must be numbers between 0 and 10. `)
      if (newStudent){
        let values = newStudent.split(",");/* divide or "split" a string according to a separator, which in this case is comma (","). 
                                          And the input come from the prompt newStudent*/
        studentName = String((values[0])) // just to make sure the 1st letter will be as capital letter, in the object's property, inside the array
        studentName = studentName[0].toUpperCase() + studentName.substring(1) // just to make sure the 1st letter will be as capital letter, in the object's property, inside the array
        students.push(" " + { // fill the array "students" with objects' properties
          name: (studentName),
          firstGrade: Number((values[1])),
          secondGrade: Number((values[2])),
          thirdGrade: Number((values[3])),
          //why can't I create finalGrade here and calculate it using the last 3 properties?
        })
        
      }
      alert(`Student ${studentName} and grades, successfully added. Done.`) // test
      alert(JSON.stringify(students)) // test (see all the array). JSON.stringify is there to make the array readable as a string
      break
      
    case 2:
      if(students.length == 0) {
        alert("List is empty. Please, add the students' name and grades")
      }else{
        alert(`You have ${students.length} students. Let's see their grades:`)
        for( let studentList of students ){
          let finalGrade = Number((((studentList.firstGrade + studentList.secondGrade + studentList.thirdGrade) / 3).toFixed(2) ))
          if (finalGrade >= 7){
            alert(`${studentList.name}'s final grade is: ${finalGrade}.
            Congratulations, ${studentList.name} was approved!` )
          } else {
            alert(`${studentList.name}'s final grade is: ${finalGrade}.
            Insufficient grade. May the Force be with ${studentList.name} on retake test...` )
          }
        }
      }
      break

    case 3:
      alert(JSON.stringify(students))
      break

    case 4:
      if(students.length == 0) {
        alert(`List is empty.`)
      }else{
        students.pop()
        alert(`Information successfully erased.`)
      }
      break

    case 5:
      alert("Goodbye!")
      break

  default:
    alert("Option not founded. Try again, please. ") 
  } // from switch
} // from while

