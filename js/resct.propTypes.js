var my_news = [
  {
    author: 'Саша Пасічна',
    text: 'В четчер, четвертого числа...'
  },
  {
    author: 'Просто Вася',
    text: 'Рахую, що $ має коштувати 8 грн!'
  },
  {
    author: 'Гість',
    text: 'Безкоштовно. Скачати. Кращий сайт - http://localhost:3000'
  }
];

var Article = React.createClass({
  propTypes: {
    data: React.PropTypes.shape({
      author: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired
    })
  },
  render: function() {
    var author = this.props.data.author,
        text = this.props.data.text;

    return(
      <article className="article">
        <p className="news__author">{author}:</p>
        <p className="news__text">{text}</p>
      </article>
    )
  }
})

var News = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },
  render: function() {
    var data = this.props.data;
    var newsTemplate;

    if (data.length > 0) {
      newsTemplate = data.map(function(item, index) {
        return (
          <div key={index}>
            <Article data={item} />
          </div>
        )
      })
    } else {
      newsTemplate = <p>Нажаль новин нема</p>
    }

    return (
      <div className="news">
        {newsTemplate}
        <strong className={data.length > 0 ? '':'none'}>Всього новин: {data.length}</strong>
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <h3>News</h3>
        <News data={my_news} />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
