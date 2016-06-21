var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: "Somebody",
            message: "Default message"
        };
    },

    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        }
    },

    handleDataChanged: function (formData) {
        this.setState(formData);
    },

    render: function () {
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onDataChanged={this.handleDataChanged} />
            </div>);
    }
});

var GreeterForm = React.createClass({

    onFormSubmit: function (e) {
        e.preventDefault();

        var name = this.refs.name.value;
        this.refs.name.value = '';
        this.refs.message.value = '';
        if (typeof (name) === 'string' && name.length > 0) {
            formData.name = name;
        }

        var message = this.refs.message.value;
        var formData = {};
        if (typeof (message) === 'string' && message.length > 0) {
            formData.message = message;
        }

        this.props.onDataChanged(formData);
    },

    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div><input type="text" placeholder="Enter name" ref='name' /></div>
                <div><textarea placeholder="Enter message" ref='message' /></div>
                <div><input type="submit" value="Submit"/></div>
            </form>
        );
    },
});

var GreeterMessage = React.createClass({

    render: function () {
        var name = this.props.name;
        var message = this.props.message;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
            </div>
        )
    }
});

ReactDOM.render(
    <Greeter name="pat"/>,
    document.getElementById('app')
);

