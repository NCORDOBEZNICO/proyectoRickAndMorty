import React from "react";
import SearchBar from "./SearchBar/SearchBar"
import { Link } from "react-router-dom";
import style from './Nav.module.css'



class Nav extends React.Component {
    constructor(props){
    super(props);
}


render() {
    return(
        <div>
            <Link to='/about'> 
            <button className={style.aboutButton}>About</button>
            </Link>
            
            <Link to='/home'> 
            <button className={style.aboutHome}>Home</button>
            </Link>
            
            
            <SearchBar onSearch={this.props.onSearch} />
        </div>
    )
};

};

export default Nav;