/**
 * Created by maple on 2/17/15.
 */

//var HelloWorld = React.createClass({
//    render: function () {
//        return (
//            <p>
//                Hello, <input type="text" placeholder="Your name here..." />!
//                It is {this.props.date.toTimeString()}
//            </p>
//        );
//    }
//});

//setInterval(function () {
//    React.render(
//        <HelloWorld date={new Date()} />,
//        document.getElementById('example')
//    );
//}, 500);

var LikeButton = React.createClass({
    getInitialState: function () {
        return {liked: false}
    },
    handleClick: function(event) {
        console.log(event);
        this.setState({liked: !this.state.liked});
    },
    render: function () {
        var text = this.state.liked ? 'like': 'haven\'t liked';
        return (
            <p onClick={this.handleClick}>
                You {text} this. Click to toggle.
            </p>
        );
    }
});

//React.render(
//    <LikeButton />,
//    document.getElementById('example')
//);

var Avatar = React.createClass({
    render: function () {
        return (
            <div>
                <ProfilePic username={this.props.username} />
                <ProfileLink username={this.props.username} />
            </div>
        );
    }
});

var ProfilePic = React.createClass({
    render: function () {
        return (
            <img src={'http://graph.facebook.com/' + this.props.username + '/picture'} />
        );
    }
});

var ProfileLink = React.createClass({
    render: function () {
        return (
            <a href={'http://www.facebook.com/' + this.props.username}>
            {this.props.username}
            </a>
        );
    }
});

React.render(
    <Avatar username="pwh" />,
    document.getElementById('example')
);

React.render(
    <Avatar username="mike" />,
    document.getElementById('example2')
);