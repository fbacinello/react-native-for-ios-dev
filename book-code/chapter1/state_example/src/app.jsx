var App = React.createClass({
	getInitialState: function(){
		return {
			message: 'this is a default message from state',
			id: 0	
		}
	},
	updateState: function(e){
		this.setState({message: e.target.value})
	},
	render: function(){
		var txt = this.props.txt
		return (
			<div> 
				<input type="text" onChange={this.updateState} />
				<h1> {this.state.message} </h1>

			</div>
			);
	}
});

React.render(<App />, document.getElementById('container'))



