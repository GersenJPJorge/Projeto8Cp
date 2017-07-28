var React = require('react');
var TelaLogin = require('./TelaValidaCpf');

var TelaPrincipal = React.createClass({
  getInitialState: function() {
    return {
      cpf: null,
    };
  },
  updateCpf: function(cpf) {
    this.setState({cpf: cpf});
  },
      render: function(){
        return (
          <div className="container">
            <TelaLogin
              updateCpf={this.updateCpf} />
          </div>
        );
      }
    });

  module.exports = TelaPrincipal;
