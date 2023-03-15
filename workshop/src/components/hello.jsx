class Hello extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      clicked: false,
      counter: 0
    };
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    });
  }

  render () {
    return (
      <div className={this.state.clicked ? 'clicked' : null}
      onClick={this.handleClick}>
       Hello, {this.props.name}! {this.state.counter}
       </div>
    )
  }
}
// class Hello extends React.Component {
//   render () {
//     const { name, age} = props;
//     return <h1>Hi {name}, your age is {age}</h1>;
//     }
// }
