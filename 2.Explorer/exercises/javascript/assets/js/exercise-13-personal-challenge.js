// GLOBAL VARIABLES /////////////////////

// empty array for the list
let _array_Students = [{},]
let _array_validation_NewStudent_Name = []

// empty boxes for the properties objects
let _property_StudentName
let _property_StudentSex
let _property_StudentTest1
let _property_StudentTest2
let _property_StudentAverage
let _property_StudentID
//

// empty boxes for the validations
let _validation_property_StudentTest1
let _validation_property_StudentTest2
//
let _validation_NewStudent_Name
let _resultLoop_NewStudent_Name
let _validation_array_StudentsLenght

// empty boxes for the prompts
let _prompt_App_MainMenu
let _prompt_App_MainMenu_CancelButton
let _prompt_App_MainMenu_InvalidOptions
//
let _prompt_NewStudent_Name
let _prompt_NewStudent_Name_CancelButton
let _prompt_NewStudent_CancelButton
//
let _prompt_Case2_MainMenu
let _prompt_CloseApp_MainMenu

// empty boxes for the loops
let _loop_App_MainMenu
let _loop_App_MainMenu_CancelButton
//
let _loop_NewStudent_Flow
let _loop_NewStudent_Name
//
let _loop_Case2_MainMenu
//
let _loop_CloseApp_MainMenu
//

// HTML elements
let _html_Body = document.querySelector("body")

let _html_Btn_RestartApp_Div = document.createElement("div")
let _html_Btn_RestartApp = document.createElement("button")
let _html_Btn_RestartApp_Text = document.createTextNode("Reiniciar a aplicação")

// * END GLOBAL VARIABLES \\\\\\\\\\\\\\\\\\\


// GLOBAL FUNCTIONS ///////////////////////

// functions for menus
let __function_App_MainMenu = () => {
  // user feedback
  _prompt_App_MainMenu = prompt(`APP MÉDIA ESCOLAR \nDigite o número da opção desejada:\n------\n\n1. Cadastrar novos(as) alunos(as) e suas notas; \n2. Consultar registro dos(as) alunos(as); \n3. Fechar programa.`)

  // answer processing data
  function validation() {
    if (_prompt_App_MainMenu == "1" || _prompt_App_MainMenu == "2" || _prompt_App_MainMenu == "3") {
      _prompt_App_MainMenu = Number(_prompt_App_MainMenu)
    } 
    else if (_prompt_App_MainMenu == null) {
      _prompt_App_MainMenu = null
    }
    else {
      _prompt_App_MainMenu = _prompt_App_MainMenu.toUpperCase()
    }
  }
  validation()
} 

let __function_App_MainMenu_CancelButton = () => {
  // user feedback
  _prompt_App_MainMenu_CancelButton = prompt(`ATENÇÃO!\n------\nTem certeza que deseja encerrar o aplicativo?\n\nS. Sim\nN. Não`)

  // processing data to upper case
  if(_prompt_App_MainMenu_CancelButton != null) {
    _prompt_App_MainMenu_CancelButton = _prompt_App_MainMenu_CancelButton.toUpperCase()
  }

  // set loop for the after first access
  _loop_App_MainMenu_CancelButton = "open"
}

// menu to input name for new student
let __function_NewStudent_Name = () => {
    // user feedback
    _prompt_NewStudent_Name = prompt(`CADASTRAR NOVO(A) ALUNO(A)\n------\nPasso 1 de 5\n\nDigite o nome completo do(a) aluno(a):`)

    // processing data to upper case
    if(_prompt_NewStudent_Name != null && _prompt_NewStudent_Name != String()) {
      _prompt_NewStudent_Name = _prompt_NewStudent_Name.toUpperCase()
    }
    
    // validation name
    // step 1: search duplicate name
    for(let i = 1; i < _array_Students.length; i++) {
      // collect the name of the time
      validation_ResultLoop_NewStudent_Name = _array_Students[i].name.indexOf(_prompt_NewStudent_Name)

      // if not duplicated, push collected name in the validation
      if(validation_ResultLoop_NewStudent_Name == -1) {
        _array_validation_NewStudent_Name.push(_array_Students[i].name.indexOf(_prompt_NewStudent_Name))
      }
    }
      
    // step 2: validate if name is duplicate
    if (_array_Students.length - _array_validation_NewStudent_Name.length  == 1) {
      _validation_NewStudent_Name = "not duplicated"
    }
        
    // step 3: validation feedback
    if(_prompt_NewStudent_Name != null
    && _prompt_NewStudent_Name != String()
    && _validation_NewStudent_Name == "not duplicated"
    ) {
      alert((`O nome "${_prompt_NewStudent_Name}" é um novo nome.`))
    }
    else if (_prompt_NewStudent_Name == null) {
      _prompt_NewStudent_Name_CancelButton = prompt(`ATENÇÃO!\n------\nTem certeza que deseja cancelar o cadastro do(a) novo(a) aluno(a)?\n\nS. Sim\nN. Não`).toUpperCase()

      // possible answers and your flows
      while(_loop_NewStudent_Flow != "close") {
        switch(_prompt_NewStudent_Name_CancelButton) {
          // affirmative option
          case "S":
            // user feedback
            alert(`OPERAÇÃO CONFIRMADA!\n------\nOpção "S" selecionada.\n\nPressione "Ok" para voltar ao menu inicial.`)
    
            // clear prompt for close app
            _loop_NewStudent_Flow = "close"
            _prompt_NewStudent_Name_CancelButton = "close"
    
            // clear properties of new student register
            __function_Clear_AttributesStudents()
    
            // return to main menu
            __function_App_MainMenu()
          break
    
          // negative option
          case "N":
            // user feedback
            alert(`OPERAÇÃO CANCELADA!\n------\nOpção "N" selecionada.\n\nPressione "Ok" para voltar ao registro do nome do(a) aluno(a).`)
    
            // clear
            _loop_NewStudent_Flow = "close"
    
            // redirect to back page
            __function_NewStudent_Name()
          break
    
          // cancel button
          case null:
            // user feedback
            alert(`OPERAÇÃO CANCELADA!\n------\nBotão "Cancelar" ativado.\n\nPressione "Ok" para voltar para a tela anterior.`)
    
            // clear
            _loop_NewStudent_Flow = "close"
    
            // redirect to back page
            __function_NewStudent_Name()
          break
          
          // invalid options
          default:
            // user feedback
            if (_prompt_NewStudent_Name_CancelButton == String()) {
              alert(`ERRO!\n------\nVocê precisa solicitar uma das opções disponíveis.\n\nPressione "Ok" para tentar novamente.`)
            } 
            else {
              alert(`ERRO!\n------\nA opção "${_prompt_NewStudent_Name_CancelButton}" não é válida.\n\nPressione "Ok" para tentar novamente.`)
            }
            
            // redirect to back page
            __function_NewStudent_Name()
          break
        }
      }
      
      // redirect to main menu
      __function_App_MainMenu()
    }
    else if ((_prompt_NewStudent_Name == String())) {
      // user feedback
      alert(`ERRO!\n------\nVocê precisa digitar algum nome de aluno(a).\n\nPressione "Ok" para tentar novamente.`)

      // redirect to back page
      __function_NewStudent_Name()
    }
    else {
      (`ERRO!\n------\nO nome "${_prompt_NewStudent_Name}" já consta no sistema.\n\nPressione "Ok" para tentar um novo nome.`)
    }
  }

// cancel button to new student flor and redirect to app main menu
let __function_NewStudent_CancelButton = () => {
  // user feedback
  _prompt_NewStudent_CancelButton = prompt(`ATENÇÃO!\n------\nTem certeza que deseja cancelar o cadastro do(a) novo(a) aluno(a)?\n\nS. Sim\nN. Não`)

  // possible answers and your flows
  while(_loop_NewStudent_Flow != "close") {
    switch(_prompt_NewStudent_CancelButton) {
      // affirmative option
      case "S":
        // user feedback
        alert(`OPERAÇÃO CONFIRMADA!\n------\nOpção "S" selecionada.\n\nPressione "Ok" para fechar o aplicativo.`)

        // clear prompt for close app
        _loop_NewStudent_Flow = "close"
        _prompt_NewStudent_CancelButton = "close"

        // clear properties of new student register
        __function_Clear_AttributesStudents()

        // return to main menu
        __function_App_MainMenu()
      break

      // negative option
      case "N":
        // user feedback
        alert(`OPERAÇÃO CANCELADA!\n------\nOpção "N" selecionada.\n\nPressione "Ok" para voltar ao menu principal.`)

        // clear
        _loop_NewStudent_Flow = "close"

        // redirect to back page
        // prog function to insert here
      break

      // cancel button
      case null:
        // user feedback
        alert(`OPERAÇÃO CANCELADA!\n------\nBotão "Cancelar" ativado.\n\nPressione "Ok" para voltar para a tela anterior.`)

        // clear
        _loop_NewStudent_Flow = "close"

        // redirect to back page
        // prog function to insert here
      break
      
      // invalid options
      default:
        // user feedback
        if (_prompt_NewStudent_CancelButton == String()) {
          alert(`ERRO!\n------\nVocê precisa solicitar uma das opções disponíveis.\n\nPressione "Ok" para tentar novamente.`)
        } 
        else {
          alert(`ERRO!\n------\nA opção "${_prompt_NewStudent_CancelButton}" não é válida.\n\nPressione "Ok" para tentar novamente.`)
        }
        
        // redirect to back page
        // prog function to insert here
      break
    }
  }
}

// retornar à pagina anterior 
let __function_NewStudent_ReturnsToBackPage = () => {
  // if()
}

let __function_CloseApp_MainMenu = () => {
  // user feedback
  _prompt_CloseApp_MainMenu = prompt(`ATENÇÃO!\n------\nTem certeza que deseja encerrar o aplicativo?\n\nS. Sim\nN. Não`)

  // processing data to upper case
  if(_prompt_CloseApp_MainMenu != null && _prompt_CloseApp_MainMenu != String()) {
    _prompt_CloseApp_MainMenu = _prompt_CloseApp_MainMenu.toUpperCase()
  }

  // set loop for the after first access
  _loop_CloseApp_MainMenu = "open"
}

// clear function for the boxes the properties objects
let __function_Clear_AttributesStudents = () => {
  _property_StudentName = undefined
  _property_StudentSex = undefined
  _property_StudentTest1 = undefined
  _property_StudentTest2 = undefined
  _property_StudentAverage = undefined
}

// function to restart app
let __function_Restart_App = () => {
  _html_Btn_RestartApp_Div.appendChild(_html_Btn_RestartApp)
  _html_Btn_RestartApp.appendChild(_html_Btn_RestartApp_Text)
  _html_Body.appendChild(_html_Btn_RestartApp_Div)

  _html_Btn_RestartApp_Div.setAttribute('style', `
  padding: 40px 0 0;
  display: flex;
  justify-content: center;
  `)

  _html_Btn_RestartApp.setAttribute('style', `
  cursor: pointer;
  padding: 16px 16px;
  border: none;
  border-radius: 4px;
  background-color: #4CAF4F;
  color: white;
  text-transform: uppercase;
  text-font: sans-serif;
  font-weight: bold;
  letter-spacing: .5px;
  `)

  _html_Btn_RestartApp.setAttribute('onmouseover', `
  style=" cursor: pointer; padding: 16px 16px; border: none; border-radius: 4px; background-color: #388E3B; color: white; text-transform: uppercase; text-font: sans-serif; font-weight: bold; letter-spacing: .5px;"
  `)

  _html_Btn_RestartApp.setAttribute('onmouseout', `
  style=" cursor: pointer; padding: 16px 16px; border: none; border-radius: 4px; background-color: #4CAF4F; color: white; text-transform: uppercase; text-font: sans-serif; font-weight: bold; letter-spacing: .5px;"
  `)

  _html_Btn_RestartApp.setAttribute('onmouseup', `
  location.reload()
  `)
}

// * END GLOBAL FUNCTIONS \\\\\\\\\\\\\\\\\\\

// Start Application ///////////////////////
let __function_Open_App = () => {
  // open main menu
  __function_App_MainMenu()

  // possible answers to main menu and your flows
  while(_loop_App_MainMenu != "close") {
    switch(_prompt_App_MainMenu) {
      // add new student
      case 1:
        while(_loop_NewStudent_Flow != "close") {
          // name
          __function_NewStudent_Name()

        

          // redirect to main menu
          __function_App_MainMenu()
        }
      break

      // check students data
      case 2:
        alert("Fluxo em construção")
        __function_App_MainMenu()
      break
      
      // close application
      case 3:
        // menu
        __function_CloseApp_MainMenu()

        // possible answers and your flows
        while(_loop_CloseApp_MainMenu != "close") {
          switch(_prompt_CloseApp_MainMenu) {
            // affirmative option
            case "S":
              // user feedback
              alert(`OPERAÇÃO CONFIRMADA!\n------\nOpção "S" selecionada.\n\nPressione "Ok" para fechar o aplicativo.`)

              // clear prompt for close app
              _loop_CloseApp_MainMenu = "close"
              _prompt_CloseApp_MainMenu = "close"
              _loop_App_MainMenu = "close"
            break

            // negative option
            case "N":
              // user feedback
              alert(`OPERAÇÃO CANCELADA!\n------\nOpção "N" selecionada.\n\nPressione "Ok" para voltar ao menu principal.`)

              // clear
              _loop_CloseApp_MainMenu = "close"

              // redirect to main menu
              __function_App_MainMenu()
            break

            // cancel button
            case null:
              // user feedback
              alert(`OPERAÇÃO CANCELADA!\n------\nBotão "Cancelar" ativado.\n\nPressione "Ok" para voltar ao menu principal.`)

              // clear
              _loop_CloseApp_MainMenu = "close"

              // redirect to main menu
              __function_App_MainMenu()
            break
            
            // invalid options
            default:
              // user feedback
              if (_prompt_CloseApp_MainMenu == String()) {
                alert(`ERRO!\n------\nVocê precisa solicitar uma das opções disponíveis.\n\nPressione "Ok" para tentar novamente.`)
              } 
              else {
                alert(`ERRO!\n------\nA opção "${_prompt_CloseApp_MainMenu}" não é válida.\n\nPressione "Ok" para tentar novamente.`)
              }
              
              // redirect to Menu Case 3
              __function_CloseApp_MainMenu()
            break
          }
        }
      // * END main menu case 3
      break
      
      // cancel button
      case null:
        // menu
        __function_App_MainMenu_CancelButton()
        
        // possible answers and your flows
        while(_loop_App_MainMenu_CancelButton != "close") {
          switch(_prompt_App_MainMenu_CancelButton) {
            // affirmative option
            case "S":
              // user feedback
              alert(`OPERAÇÃO CONFIRMADA!\n------\nOpção "S" selecionada.\n\nPressione "Ok" para fechar o aplicativo.`)

              // clear prompt for close app
              _loop_App_MainMenu_CancelButton = "close"
              _prompt_App_MainMenu_CancelButton = "close"
              _loop_App_MainMenu = "close"
            break

            // negative option
            case "N":
              // user feedback
              alert(`OPERAÇÃO CANCELADA!\n------\nOpção "N" selecionada.\n\nPressione "Ok" para voltar ao menu principal.`)

              // clear
              _loop_App_MainMenu_CancelButton = "close"

              // redirect to main menu
              __function_App_MainMenu()
            break

            // cancel button
            case null:
              // user feedback
              alert(`OPERAÇÃO CANCELADA!\n------\nBotão "Cancelar" ativado.\n\nPressione "Ok" para voltar ao menu principal.`)

              // clear
              _loop_App_MainMenu_CancelButton = "close"

              // redirect to main menu
              __function_App_MainMenu()
            break
            
            // invalid options
            default:
              // user feedback
              if (_prompt_App_MainMenu_CancelButton == String()) {
                alert(`ERRO!\n------\nVocê precisa solicitar uma das opções disponíveis.\n\nPressione "Ok" para tentar novamente.`)
              } else {
                alert(`ERRO!\n------\nA opção "${_prompt_App_MainMenu_CancelButton}" não é válida.\n\nPressione "Ok" para tentar novamente.`)
              }

              // clear
              _loop_App_MainMenu_CancelButton = "close"
              
              // redirect to Menu Case 3
              __function_App_MainMenu_CancelButton()
            break
          }
        }
      break

      // invalid options
      default:
        // user feedback
        if (_prompt_App_MainMenu == String()) {
          alert(`ERRO!\n------\nVocê precisa solicitar uma das opções disponíveis.\n\nPressione "Ok" para tentar novamente.`)
        } 
        else {
          alert(`ERRO!\n------\nA opção "${_prompt_App_MainMenu}" não é válida.\n\nPressione "Ok" para tentar novamente.`)
        }

        // redirect to main menu
        __function_App_MainMenu()
      break
    }
  }
}
// * END application function
__function_Open_App()

// restart app
__function_Restart_App()