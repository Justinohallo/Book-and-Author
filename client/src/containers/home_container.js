import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getBooks} from '../actions'
import BookItem from '../WidgetsUI/book_item'

export class Home_container extends Component {

    componentWillMount(){
        this.props.dispatch(getBooks(1,0,'desc'))
    }

    renderItems = (books) => (
        books.list ?  
        books.list.map((item,i) => (
           <BookItem {...item} key={i}/>
        ))
        :null
    )

    loadMore = () => { 
        let count = this.props.books.list.length
        this.props.dispatch(getBooks(1,count,'desc', this.props.books.list)) 
    }

    

    render() {
       
        return (
            <div>
                {this.renderItems(this.props.books)}
                <div className="loadmore" 
                onClick={this.loadMore}>
                    Load More
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        books:state.books
    }
}

export default connect(mapStateToProps)(Home_container)
