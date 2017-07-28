var querystring = require('querystring');
var React       = require('react');
var axios       = require('axios');
var UserCpf   = require('../components/TelaValidaCpf');

var UserCpf = {
  getByUserCpf: function (cpf) {
//     console.log(cpf);

      return axios.post('https://172.18.198.13/esb-orbitall/acesso/buscarPorDocumento',

    querystring.stringify({
              documentNumber    : cpf
    }), {
      headers: {
              "Authorization"   :"bearer dfe4098e-5e5a-4c3e-ad4f-2cbf800132b9",
              "Content-Type"    :"application/x-www-form-urlencoded",
              "systemName"      :"ole",
              "environmentName" :"hml",
              "productName"     :"appOle"

// documentNumber=88269981087

}
    }).then(function(response) {
        console.log(response.data);
        console.log(response.data.user.name);
        console.log(response.data.user.celularPhone);
        console.log(response.data.user.documentType);
        console.log(response.data.user.documentNumber);

    }).catch((error) => {
          console.log('error ' + error);
    });
   }
};

module.exports = UserCpf;
