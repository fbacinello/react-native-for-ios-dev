var App = React.createClass({
	getDefaultProps: function(){
		return {
			txt: 'default value of text',
			cat: 0
		}
	},
	propTypes: {
		txt: React.PropTypes.string,
		cat: React.PropTypes.number.isRequired
	},
	render: function(){
		var txt = this.props.txt
		return (
			<div> 
				<b>Bold</b>
				<h1> {txt} </h1>

			</div>
			);
	}
});

React.render(<App cat={5} />, document.getElementById('container'))
