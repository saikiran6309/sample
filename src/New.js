import React from "react";
class New extends React.Component {  
 constructor() {  
      super();        
      this.state = { displayBio: false };  
      console.log('Component this', this);  
      this.toggleDisplayBio = this.toggleDisplayBio.bind(this);  
      }  
      toggleDisplayBio(){  
          this.setState({displayBio: !this.state.displayBio});  
          }  
      render() {  
          return (  
              <div>  
                  <h1>Welcome to JavaTpoint!!</h1>  
                  {  
                      this.state.displayBio ? (   
                          <div>  
                            <h1>hr</h1>
                              <button onClick={this.toggleDisplayBio}> Show Less </button>  
                        </div>  
                          ) : (  
                              <div>  
                                  <button onClick={this.toggleDisplayBio}> Read More </button>  
                              </div>  
                          )    
                  }   
             </div>  
        )  
    }  
}  
export default New;  