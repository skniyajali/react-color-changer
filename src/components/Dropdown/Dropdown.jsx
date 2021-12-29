import React from "react";
import style from "./Dropdown.module.css";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
class Dropdown extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            showDropdown : false,
            color: "",
            label: "",
            options : [{
                label : 'Lime',
                value : 'lime'
            },
            {
                label : 'Lavender',
                value : 'lavender'
            },
            {
                label : 'Crimson',
                value : 'crimson'
            },
            {
                label : 'Darkblue',
                value : 'darkblue'
            },
            {
                label : 'Teal',
                value : 'teal'
            },
            {
                label : 'Rebecca Purple',
                value : 'rebeccapurple'
            },
            {
                label : 'Ghost White',
                value : 'ghostwhite'
            },
            {
                label : 'Aqua Marine',
                value : 'aquamarine'
            },
            {
                label : 'Alice Blue',
                value : 'aliceblue'
            }]
        }
    }
    passData = (val)=>this.props.util(val);
    render(){
        //this.props.util(this.state.color?this.state.color:"#fff");
        return(
            <div>
                <div data-testid="dropdownWrapper" id="dropdownWrapper" className={style.wrapper}>
                    <div id="dropdownContainer" data-testid="dropdownContainer" className={style.container} onClick={
                        ()=>this.setState({showDropdown:!this.state.showDropdown})} style={{
                            backgroundColor:this.state.color?this.state.color:"#ccc"
                            }}>
                        {this.state.label?this.state.label:"Dropdown"}
                       <ArrowDropDownIcon className={style.dropdownicon}/>
                    </div>
                    <div id="block" data-testid="block" className={style.block} style={{display:this.state.showDropdown?"block":"none"}}>
                        {
                            this.state.options.map(item=>
                            <button key={item.value} id={item.label} data-testid="option" className={style.button} style={{backgroundColor:item.value}} onClick={()=>{
                                this.setState({showDropdown:false,color:item.value,label:item.label});
                                this.passData(item.value);
                            }}>
                                {item.label}
                            </button>)

                        }
                    </div>
                </div>
            </div>
        );
    }

}

export default Dropdown;



