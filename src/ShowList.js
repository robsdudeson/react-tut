import React from 'react'

export default class ShowList extends React.Component{
    render(){
        return(<div>
            <h3>Friends</h3>
            <ul>
                {this.props.names.map((friend)=><li>{friend}</li>)}
            </ul>
        </div>
    )}
}

ShowList.defaultProps = {
    names: []
}