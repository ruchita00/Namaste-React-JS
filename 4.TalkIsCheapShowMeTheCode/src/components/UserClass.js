import React from "react";

//class based component is having render method which return
//some pieace of jsx
//React.Component = is a class which is given by react
//constructor will received props
//when i am loading class based component on the web page so
// at that time im creating instance of class and giving props
//that time constructor called

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Ruchi",
        location: "banglore",
        avatar_url: "https://dummy-photo.com",
      },
    };
    console.log("child constructor");
  }

  //whenevr the class loads contructor is called
  //once the contructor is called then render is called
  //once the class based contructor mounted on to the  dom
  //then componentDidMount is called
  //componentDiDMount() is used to make api called

  //want to quickly render my component
  //then api called
  //get the data

  //1.render happens with some default value which we have in the userinfo
  //2.means first react update the dom with the dummmy data
  //3.means the component was render with some dummy data
  //4.after that componnetDidMount was called and api called was made
  //5.when we see the setstate the updating cycle begins
  //6.setState update the variables
  //7. when the setstate is updated react trigger the render once again
  //8.render happens but state variable change with updated data
  //9.so react will update the dom with the new value
  //10.then called componentDidupdate this is how react cycle works

  /**
   * constructor (dummy)
   * render(dummy)
   *    <html dummy>
   * component did mount
   *     <api call>
   *     <this.setstate>
   */

  //life cycle method
  /**
   * (Mounting)
   * first is render phase:
   *   constructor
   *   render
   *
   * Second is the commit phase
   *   react update DOM and refs
   *   componentDidmount
   *
   *
   * Parent Contructor
   * parent render
   *   first child contructor
   *   first child render
   *
   *   second child contructor
   *   second child render
   *
   * <DOM UPDATED -IN A SINGLE BATCH> (for both the children)
   *
   * first child componentDidMount()
   * second child componentDidMount()
   *
   * parent componentDidMount()
   */

  async componentDidMount() {
    console.log("child componeny did mount");

    const data = await fetch(`https://api.github.com/users/ruchita00`);
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    //when the component changes the page it will be unmounting
    console.log("component will unmount");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(name + "child render");
    return (
      <div style={{ marginTop: "100px" }}>
        {/* <h1>count:{count}</h1>
        <button
          onClick={() => {
            //never update state variable directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          CountIncrease
        </button> */}
        <h2>Name:{name}</h2>
        <h2>Location : {location}</h2>
        <h3>
          <img src={avatar_url} />
        </h3>
        <h2>This is Namaste javascript</h2>
      </div>
    );
  }
}

export default UserClass;
