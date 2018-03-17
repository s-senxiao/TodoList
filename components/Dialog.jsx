import React from 'react';
import ReactDOM from 'react-dom';

class Dialog extends React.Component {
  constructor (props) {
    super(props);
    this.save = this.save.bind(this);
  }

  save() {
    let inputEle = this.refs.input;
    let planLength = this.props.length;
    planLength ? planLength : 0;
    let addNewPlan = this.props.addNewPlan;

    if(inputEle.value) {
      addNewPlan({ id: planLength, text: inputEle.value, status: 'unfinished' });

      inputEle.value = '';
    }
  }

  render () {
    return (
      <div className="dialog form-group">
        <input className="form-control" ref="input" type="text"/>
        <button className="btn btn-primary" onClick={this.save}>保存</button>
      </div>
    )
  }
}

export default Dialog;
