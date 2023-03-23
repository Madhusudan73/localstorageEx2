// source : https://www.educba.com/react-native-local-storage/
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
console.log("new counter-example");
class Counter extends React.Component {
constructor(props) {
super(props);
this.handleAddOne = this.handleAddOne.bind(this); this.handleMinusOne = this.handleMinusOne.bind(this); this.handleReset = this.handleReset.bind(this); this.state = {
count: 0
};
}
componentDidMount() {
const stringCount = localStorage.getItem("count"); const count = parseInt(stringCount, 10);
if (!isNaN(count)) { this.setState(() => ({ count }));
}
}
componentDidUpdate(prevProps, prevState) {
if (prevState.count !== this.state.count) { localStorage.setItem("count", this.state.count);}
}
handleAddOne() { this.setState(prevState => {
return {
count: prevState.count + 1
};
});
}
handleMinusOne() { this.setState(prevState => {
return {
count: prevState.count - 1
};
});
}
handleReset() { this.setState(() => {
return { count: 0
};
});
}
render(){
return (
<div class="container">
<h1>Count Value: {this.state.count}</h1>
<button onClick={this.handleMinusOne}>-1</button>
<button onClick={this.handleAddOne}>+1</button>
<button onClick={this.handleReset}>reset</button>
<p>Count will start from the Last Number you entered.</p>
<p>This is done, by storing data in your Local Storage.</p>
</div>
);
}
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);