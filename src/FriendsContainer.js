import React from 'react'

import ShowList from './ShowList'

export default class FriendsContainer extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name: 'The Dude',
            friends: ['Donnie', 'Walter', 'LandLord']
        }
    }
    render(){
        return(
            <div>
                <h3>Name: {this.state.name}</h3>
                <ShowList names={this.state.friends} />
            </div>
        )
    }
}