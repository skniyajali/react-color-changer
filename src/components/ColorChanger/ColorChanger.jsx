import React from "react";
import style from  "./ColorChanger.module.css";
class ColorChanger extends React.Component{
    render(){
        return(
            <div>
                <div className={style.container} style={{
                    backgroundColor: `${this.props.bgc}`
                }}>
                    
                </div>
            </div>
        );
    }
}

export default ColorChanger;