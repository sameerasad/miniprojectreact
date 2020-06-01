import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';


/*class Demo extends Component{
        render(){
            return <div className="main">
                <h1>Hello {this.props.name}</h1>
                <p>bla blka\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ bla</p>
            </div>
        }

}*/

const Demo = (props) => {
    return <div className="main">
    <h1>Hello {props.name}</h1>
    <p>bla blka\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ bla</p>
</div>
}

export default Demo;