let _array_Students = [
  {
  },
]

let _array_validation_NewStudent_Name = []
let _validation_NewStudent_Name
let validation_ResultLoop_NewStudent_Name
let _validation_array_StudentsLenght

let _prompt_NewStudent_Name

// step 1: user feedback
_prompt_NewStudent_Name = prompt("Digite um nome abaixo:")

// step 2: search duplicate name
for(let i = 1; i < _array_Students.length; i++) {
    // collect the name of the time
    validation_ResultLoop_NewStudent_Name = _array_Students[i].name.indexOf(_prompt_NewStudent_Name)

    // if not duplicated, push collected name in the validation
    if(validation_ResultLoop_NewStudent_Name == -1) {
      _array_validation_NewStudent_Name.push(_array_Students[i].name.indexOf(_prompt_NewStudent_Name))
    }
}

// step 3: validate if name is duplicate
if (_array_Students.length - _array_validation_NewStudent_Name.length  == 1) {
  _validation_NewStudent_Name = "not duplicated"
}

 console.log("Array validation " + _array_validation_NewStudent_Name.length)
 console.log("Alunos cadastrados " +  _validation_array_StudentsLenght)
 console.log("Loop result: " + validation_ResultLoop_NewStudent_Name)

// step 4: validation feedback
if(_prompt_NewStudent_Name != null
&& _prompt_NewStudent_Name != String()
&& _validation_NewStudent_Name == "not duplicated"
) {
  alert((`O nome "${_prompt_NewStudent_Name}" é um novo nome.`))
}
else if (_prompt_NewStudent_Name == null) {
  alert((`Operação cancelada.`))
}
else if ((_prompt_NewStudent_Name == String())) {
  alert((`Nenhum nome foi digitado.`))
}
else {
alert(`O nome "${_prompt_NewStudent_Name}" já foi registrado no sistema.`)
}