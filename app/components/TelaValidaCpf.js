var React = require('react');

var UserCpf = require('../services/UserCpf');

var TelaValidaCpf = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    UserCpf.getByUserCpf(this.refs.cpf.value)
         .then(function(response) {
          this.props.updateCpf(response);
    }.bind(this));
  },
  render: function() {

    return (
      <div>

        <header>
          <div className="center">
            <img src="img/ole-logo.png" className="logo-ole" />
          </div>
        </header>

        <section className="box-login" id="login">
          <div className="center">
            <form method="" action="" className="form-login" id="form-login" onSubmit={this.handleSubmit}>
              <h6>Valida CPF</h6>
              <div className="row row-input">
                <input type="text" ref="cpf" className="" id="" name="cpf" placeholder="CPF" required />
              </div>
              <div className="row row-input">
                <button id="">VALIDAR</button>
              </div>
            </form>
          </div>
        </section>

        <div className="ct-footer">
          <footer>
            <div className="center">
              <img src="img/santander-footer-1x.png" />
            </div>
          </footer>
        </div>

      </div>
          );
        }
       });

TelaValidaCpf.propTypes = {
  updateCpf: React.PropTypes.func,
};

module.exports = TelaValidaCpf;