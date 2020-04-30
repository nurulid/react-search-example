import React from "react";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: [],
      searchString: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchString: e.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(
        // Handle the result
        (result) => {
          this.setState({
            isLoaded: true,
            posts: result,
          });
        },

        // Handle error
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded } = this.state;

    let posts = this.state.posts,
      searchString = this.state.searchString.trim().toLowerCase();

    // search filter by name
    if (searchString.length > 0) {
      posts = posts.filter(function (post) {
        return post.name.toLowerCase().match(searchString);
      });
    }

    if (error) {
      return <div className="text-center">Error in loading</div>;
    } else if (!isLoaded) {
      return <div className="text-center">Loading ...</div>;
    } else {
      return (
        <>
          <div className="input-wrapper text-center">
            <input
              value={this.state.searchString}
              onChange={this.handleChange}
              type="text"
              placeholder="Type a name"
            />
          </div>
          <ol className="list-wrapper">
            {posts.map((post) => (
              <li key={post.id} className="list-item">
                <div>
                  <div>name: {post.name}</div>
                  <div>username: {post.username}</div>
                  <div>email: {post.email}</div>
                  <div>address: {post.address.street}, {post.address.suite}, {post.address.city}</div>
                </div>
              </li>
            ))}
          </ol>
        </>
      );
    }
  }
}

export default ListItem;
