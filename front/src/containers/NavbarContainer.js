import React from "react";



class NavbarContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          Search:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
     
      handleChange (evt) {
        const value = evt.target.value; 
        this.setState({
          Search: value    
    });}
    
      handleSubmit(evt){
        evt.preventDefault();  
       this.props.fetchPeliculas(this.state.SearchMovie)
     }
    


  return ( 
    <div className='container section' >
            <div className='row'>
              

              

            </div>
    </div>
   );
}
 
export default NavbarContainer;