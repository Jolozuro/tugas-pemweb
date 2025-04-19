import React, { Component }  from 'react';

class Header extends Component{
  constructor(props) {
  super (props); this.state = {
    judul: 'ini judul dari state',
  };
  this.handlePesan = this.handlePesan.bind(this);
  } 
  handlePesan() {
    alert(this.state.judul);
  };
    render(){
      return(
        <>
         <h2>Ini Makanan Khas Indonesia</h2>
         <h3>{this.state.judul}</h3>
         <a href='/' onClick={this.handlePesan}>Halaman Header</a>
        </>
      );
    } 
  }

// Export Component
export default Header;

