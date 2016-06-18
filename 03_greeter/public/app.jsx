var Greeter = React.createClass({

    getDefaultProps: function () {
        return { name: "Somebody" };
    },

    render: function () {
        var name = this.props.name;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <GreeterForm />
            </div>);
    }
});

var GreeterForm = React.createClass({
    render: function () {
        return (
            <form>
                <input type="text" placeholder="Enter name"></input>
                <input type="submit" value="Submit"/>
            </form>
        );
    },
});

ReactDOM.render(
    <Greeter name="pat"/>,
    document.getElementById('app')
);

