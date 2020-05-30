import React from "react";
import style from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };
    activeStatus = () => {
        this.setState({editMode: true})
    };
    diactiveStatus = ()=>{
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status)
    };
    onStatusChange = e =>{
        this.setState({
            status: e.target.value
        });
    };
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <input autoFocus={true} onChange={this.onStatusChange} onBlur={this.diactiveStatus} type="text" value={this.state.status}/>
                    : <div onDoubleClick={this.activeStatus} >{this.props.status || "no status"}</div>}
            </div>
        )
    }
};

export default ProfileStatus;