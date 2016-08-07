// ReactDOM.render(
//   React.createElement('h1', null, 'Привет, Мир!'),
//   document.getElementById('root')
// );

// зверху чистий js знизу jsx

// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );

// з компонентом

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        Всем привет, я компонент App!
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
