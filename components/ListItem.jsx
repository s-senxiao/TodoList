import React from 'react';
import ReactDOM from 'react-dom';

class ListItem extends React.Component {
  constructor (props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);
  }

  delete(e) {
    let deletePlan = this.props.deletePlan;
    let id = e.target.getAttribute('data-id');
    deletePlan(id);
  }

  update (e) {
    let updatePlan = this.props.updatePlan;
    let id = e.target.getAttribute('data-id');
    updatePlan(id);
  }

  render() {
    let plan = this.props.plan;

    const finishedStyle = {
      backgroundColor: '#FFFA9D',
      color: '#FF9A3C',
      textDecoration: 'line-through'
    }
    const unfinishedStyle = {
      backgroundColor: '#DFFCB5',
      color: '#2EB872',
    };

    let itemStyle = plan.status == 'finished' ? finishedStyle : unfinishedStyle;

    return (
      <li className="todo-list-item" style={itemStyle}>
        <input type="checkbox" data-id={plan.id} onChange={this.update}/>
        <p className="text">{plan.text}</p>
        <button className="btn-delete" data-id={plan.id} onClick={this.delete}>删除</button>
      </li>
    )
  }
}

export default ListItem;
