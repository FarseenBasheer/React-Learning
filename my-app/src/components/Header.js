// function Header(){
//     return (
//         <div>
//             <h1>Header</h1>
//         </div>
//     )
// }
// export default Header; //exporting the Header component to be used in App.js

// function Header(props){
//     return (
//         <div>
//             <h1>Header {props.data1}</h1>
//         </div>
//     )
// }
// export default Header; //exporting the Header component to be used in App.js

// Converting the same functional component into class compoennet below
import { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Header class component {this.props.data1}</h1>
            </div>
        )
    }
}
export default Header;