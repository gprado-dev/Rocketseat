// empty boxes
let students = []

let studentName, studentSex, studentTest1, studentTest2, studentAverage, studentID

let validationTest1, validationTest2

let option
let searchID

// masters functions
let clear = () => {
  option = undefined
  studentName = undefined
  studentSex = undefined
  studentTest1 = undefined
  studentTest2 = undefined
  studentAverage = undefined
}

let cancelButton = () => {
  // user feedback
  alert('Cadastro cancelado.\nVocê será redirecionado para o menu inicial.')
  
  // clear options
  clear()

  // tests lines
  console.log("Cancel buton says to option: " + option)
  console.log("Cancel buton says to name: " + studentName)
  
  // return to main menu
  menu()
}

// workflow
let menu = () => {
  while(option != 3) {
    // aplication menu
    option = Number(prompt(`MÉDIA ESCOLAR \nDigite o número da opção desejada: \n\n1. Cadastrar novo(a) aluno(a) e suas notas; \n2. Consultar registro dos(as) alunos(as); \n3. Fechar programa.
  `))

    // options
    switch(option) {
      case 1:
        while(option == 1 && option !=3) {
          function newStudent() {
            // student name
            function studentNameFunction() {
              // new student name
              while(studentName == undefined) {
                studentName = prompt("Digite o nome completo do(a) aluno(a):")
              }

              // validation name
              if(students.length > 0) {
              console.log("PROGRAMAR: Existem alunos cadastrados") 
              }
            }
            studentNameFunction()

            // student sex
            while(studentSex != "Feminino" && studentSex != "Masculino" && option != 3) {
              // user feedback
              studentSex = prompt(`Qual o sexo do(a) aluno(a)?\nDigite o número da opção desejada:\n\n1. Feminino\n2. Masculino`)

              // first character to uppercase
              if(studentSex != null) {
                studentSex = studentSex[0].toUpperCase() + studentSex.substring(1).toLowerCase()
              }
              
              // validation
              switch(studentSex) {
                // successes
                case "1":
                  studentSex = "Feminino"
                  break
                case "2":
                  studentSex = "Masculino"
                  break
                
                // mistakes
                case "Feminino":
                  studentSex = "wrong answer";
                  alert(`ERRO: A opção digitada não é válida! \nSe deseja a opção "Feminino", digite 1 na próxima tela.`)
                  break
                case "Masculino":
                  studentSex = "wrong answer";
                  alert(`ERRO: A opção digitada não é válida! \nSe deseja a opção "Masculino", digite 2 na próxima tela.`)
                  break

                // to cancel button
                case null:
                  cancelButton()
                  break

                // scape route
                default:
                  alert(`ERRO: A opção "${studentSex}" não é válida!`)
                  break
              }
            }
            
            // student test 1
            while(typeof studentTest1 != typeof 1 && option != 3) {
              // input
              studentTest1 = prompt("Valor da PRIMEIRA nota (digite um número entre 0 e 10):")

              // processing data
              if(studentTest1.slice(1,2) == "." || studentTest1 >= 0 && studentTest1 <= 10) {
                studentTest1 = Number(studentTest1)
              } else if(studentTest1 == null) {
                cancelButton()
              } else {
                alert(`ERRO: A opção "${studentTest1}" não é válida! \nO valor precisa ser um número entre 0 e 10.`)
              }

              // // validation
              // if(typeof validationTest1 == "string") {
                
              // }
            }

            // student test 2
            while(typeof studentTest2 != typeof 1 && option != 3) {
              // input
              studentTest2 = prompt("Valor da SEGUNDA nota (digite um número entre 0 e 10):")

              // processing data
              if(studentTest2.slice(1,2) == "." || studentTest2 >= 0 && studentTest2 <= 10) {
                studentTest2 = Number(studentTest2)
              } 
              else {
                alert(`ERRO: A opção "${studentTest2}" não é válida! \nO valor precisa ser um número entre 0 e 10.`)
              }
            }

            // final data processing
            while(option == 1) {
              // student average
              function average() {
                studentAverage = ((studentTest1 + studentTest2) / 2).toFixed(2)
              }
              average()

              // add student object in the array list
              function pushInformations() {
                // push informations
                students.push({name: studentName, sex: studentSex, test1: studentTest1, test2: studentTest2, average: studentAverage})

                // user feedback
                alert(`O aluno ${studentName} foi registrado com sucesso`)
              } 
              pushInformations()

              // clear variables
              clear()

              // come back
              console.log("Flow Case 1 finished says " + students.length + " students registered")
            }
          }
          newStudent()
        }

        // end case 1
        break

      case 2:
        // empty state
        while(students.length ==0 && option != 3) {
          alert("Não existem alunos(as) cadastrados(as).")
          menu()
        }

        // search result
        while(students.length > 0 && option != 3) {
            function searchStudentID() {
              // search screen
              if (searchID == undefined) {
                searchID = Number(prompt(`CONSULTAR REGISTRO DO ALUNO\nDigite um número de matrícula escolar:`))
              }

              // cancel button
              else if (searchID == 0) {
                // clear
                searchID = undefined
                menu()
              }

              // error state
              else if (searchID > (students.length)-1 && searchID != 0) {
                alert(`A matrícula "${searchID}" é inválida!\nTente novamente.`)
                
                // clear
                searchID = undefined
              }

              // success state
              else {
                let title, feedback

                let titleFunction = () => {
                  if (students[searchID].sex == "Feminino") {
                    return title = "FICHA DA ESTUDANTE"
                  }
                  else {
                    return title = "FICHA DO ESTUDANTE"
                  }
                }

                let feedbackFunction = () => {
                  if (students[searchID].sex == "Feminino" && students[searchID].average >= 7) {
                    return feedback = `Parabéns, ${students[searchID].name}! Você foi aprovada no concurso.`
                  }
                  else if (students[searchID].sex == "Masculino" && students[searchID].average >= 7) {
                    return feedback = `Parabéns, ${students[searchID].name}! Você foi aprovado no concurso.`
                  }
                  else if (students[searchID].average < 7) {
                    return feedback = `Parabéns, ${students[searchID].name}! Você foi aprovada no concurso.`
                  }
                }

                alert(`${titleFunction()}\n---\nNOME: ${students[searchID].name}\nSEXO: ${students[searchID].sex}\nPRIMEIRA PROVA: ${students[searchID].test1}\nSEGUNDA PROVA: ${students[searchID].test2}\nMÉDIA: ${students[searchID].average}\n---\nFEEDBACK: ${feedbackFunction()}`)

                // clear
                searchID = undefined
              }
            }
            searchStudentID()
        }

        // end case 2
        break

      case 0:
        option = 3
      
      case 3:
        alert("Aplicação encerrada.")

        // end case 0 and case 3
        break

      default:
        alert("ERRO: Opção inválida!")

        // end default case
        break
    }
  }
}

// start function
menu()