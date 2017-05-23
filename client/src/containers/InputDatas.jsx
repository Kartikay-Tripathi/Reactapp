
var datas = [
  {
    id: "name",
    label: "Full Name",
    value: "",
    validation: {
      rules: { name: [ "required", "regex:/^([a-zA-z]{3,10} [a-zA-z ]{3,})$/" ] },
      messages: { "required.name": 'Enter name is not valid!', 'regex.name': 'Name is valid!' }
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "age",
    label: "Age",
    value: "",
    validation: {
      rules: { age: [ "required", "integer" ] },
      messages: { "required.age": 'Informe sua idade!', 'integer.age': 'Só números aqui ok' }
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  {
    id: "email",
    label: " E-mail",
    value: "",
    validation: {
      rules: { email: [ "required", "email" ] },
      messages: { "required.email": ' e-mail is valid!', 'email.email': 'E-mail is in valid!' }
    },
    pristine: true,
    hasError: false,
    errorMessage: ''
  },
  // {
  //   id: "lang",
  //   label: "Linguagem de programação poderosa!",
  //   value: "",
  //   validation: {
  //     rules: { lang: [ "required", "regex:/^javascript$/" ] },
  //     messages: { "required.lang": 'Digite a linguagem!', 'regex.lang': 'Dica: começa com "java" terminha com "script"' }
  //   },
  //   pristine: true,
  //   hasError: false,
  //   errorMessage: ''
  // }
];

module.exports = datas;
