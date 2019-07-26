import React, { Component } from 'react';

class Background extends Component {
     
  constructor(props)
  {
      super(props)

      this.state = {
          colors: ["cyan", 'green', "red", "orange"],
          active : "cyan",
      }

  }

  clickHandler = (color) =>
  {
     this.setState({
         active :  color,
     })
      
  }
     
    render() {
        return (
            <div>
                <div style={{ backgroundColor: this.state.active }}>
              {
                        this.state.colors.map((c,index) => {
                        const colorObj = { backgroundColor : c };
                            return <button onClick={() => { this.clickHandler(c) }} key={index} style={colorObj}>click me !</button>;
                    })
              }
             </div>
            </div>
        )
    }
}

export default Background;