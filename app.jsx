import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './components/ListItem';
import Dialog from './components/Dialog';
import './src/css/bootstrap.min.css';
import './src/css/app.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.addNewPlan  = this.addNewPlan.bind(this);
    this.deletePlan  = this.deletePlan.bind(this);
    this.updatePlan  = this.updatePlan.bind(this);

    this.state = { plans: [
      { id: 0, text: '吃饭', status: 'unfinished' },
      { id: 1, text: '睡觉', status: 'unfinished' }
    ] }
  }

  addNewPlan(newPlan) {
    let plans = this.state.plans;
    plans.push(newPlan);
    this.setState({ plans: plans });
  }

  deletePlan(id) {
    let index = null;
    let plans = this.state.plans;
    for(var i = 0; i < plans.length; i++) {
      let plan = plans[i];
      if(plan.id == id) {
        index = plans.indexOf(plan);
      }
    }

    plans.splice(index, 1);
    this.setState({ plans: plans });
  }

  updatePlan(id) {
    let index = null;
    let plans = this.state.plans;
    for(let i = 0; i < plans.length; i++) {
      var plan = plans[i];
      if(plan.id == id) {
        index = plans.indexOf(plan);
      }
    }

    if(plans[index]['status'] == 'unfinished') {
      plans[index]['status'] = 'finished';
    } else {
      plans[index]['status'] = 'unfinished';
    }
    this.setState({ plans: plans });
  }

  render() {
    let _this = this;
    let plans = this.state.plans;
    let List = plans.map(function (plan) {
      return <ListItem key={plan.id} plan={plan} deletePlan={_this.deletePlan} updatePlan={_this.updatePlan}/>
    })

    return (
      <div className="container">
        <h1>我的计划</h1>
        <ul className="todo-list">
          {List}
        </ul>
        <Dialog addNewPlan={this.addNewPlan} length={this.state.plans.length}/>
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    <TodoList/>
  </div>,
  document.getElementById('app')
)
