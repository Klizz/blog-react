import React from 'react';

function ShowInput(props) {
    return (
      <div className={props.warn ? "warning": "hide"}>
        <input placeholder="Ingresa tu email" id="email" type="text" class="validate" autocomplete="off" />
      </div>
    );
  }
  
  class Subscribe extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showForm: true}
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(prevState => ({
        showForm: !prevState.showForm
      }));
    }
  
    render() {
      return (
        <div>
          <ShowInput warn={this.state.showForm} />
          <button onClick={this.handleToggleClick} className="btn white pink-text">{this.state.showForm ? 'Suscribirse' : 'Gracias por tu suscripcion'}</button>
        </div>
      );
    }
  }

export default Subscribe;