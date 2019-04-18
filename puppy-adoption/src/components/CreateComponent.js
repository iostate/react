import React, {Component} from 'react';

export default class CreateComponent extends Component {
  constructor(props) {
    super(props);
    this.onChangePupperName = this.onChangePupperName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      age: '',
      shotsCurrent: '',
      additionalComments: '',
    };
  }

  onChangePupperName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeAge(e) {
    this.setState({
      age: e.target.value,
    });
  }
  onChangeShotsCurrent(e) {
    this.setState({
      shotsCurrent: e.target.value,
    });
  }
  onChangeAdditionalComments(e) {
    this.setState({
      additionalComments: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`name is ${this.state.name} and age is ${this.state.age}`);
    this.setState({
      name: '',
      age: '',
      shotsCurrent: '',
      additionalComments: '',
    });
  }

  render() {
    return (
      <div style={{marginTop: 50}}>
        <h3>Add New Listing</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Add Fluffer Name: </label>
            <input
              type="text"
              value={this.state.name}
              className="form-control"
              onChange={this.onChangePupperName}
            />
          </div>
          <div className="form-group">
            <label>Add Fluffer Age: </label>
            <input
              type="number"
              value={this.state.port}
              className="form-control"
              onChange={this.onChangeAge}
            />
          </div>

          <div className="form-check" style={{marginTop: 25}}>
            <ul>
              <li>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="samplesCurrent"
                  checked={false}
                  value="true"
                  onChange={this.onChangeShotsCurrent}
                />
                <label className="form-check-label" for="samplesCurrent">
                  Shots are current{' '}
                </label>
              </li>
            </ul>
          </div>

          <div className="form-group" style={{marginTop: 25}}>
            <label for="additionalComments">Additional Comments: </label>
            <textarea
              className="form-control"
              id="additionalComments"
              rows="3"
              value={this.state.additionalComments}
              onChange={this.onChangeAdditionalComments}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add Pupper Listing"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
