import React, { Component } from 'react'

import {connect} from 'react-redux'
import {Link } from 'react-router-dom'
import {addBook, clearNewBook} from '../../actions/index'

export class AddBook extends Component {
    state = {
        formdata:{
            name:"",
            author:'',
            review:'',
            pages:'',
            rating:'',
            price:''
        }


    }

    componentWillUnmount(){
        this.props.dispatch(clearNewBook())
    }

    handleInput = (event, name) =>{
        

        const newFormData = {
        ...this.state.formdata
        }

        newFormData[name] = event.target.value

        this.setState({
            formdata: newFormData
        })

    }

    submitForm = (e) =>{
        e.preventDefault()
        this.props.dispatch(addBook({
            ...this.state.formdata,
            ownerId:this.props.user.login.id
        }))
    }

    showNewBook = (book) => (
       
        book.post ? 
        <div className='conf_link'>
            Added: <Link to={`/books/${book.bookId}`}> 
            Click To see the Book
            </Link>
        </div> : null
        
    )

    
    render() {
        return (
            <div className='rl_container article'>
                <form onSubmit={this.submitForm}>
                    <h2>Add a Review</h2>
                    <div className="form_element">
                        <input type="text"
                        placeholder='Enter Name'
                        value={this.state.formdata.name}
                        onChange={(event)=>this.handleInput(event,'name')}
                        />
                    </div>

                    <div className="form_element">
                        <input type="text"
                        placeholder='Enter Author'
                        value={this.state.formdata.author}
                        onChange={(event)=>this.handleInput(event,'author')}
                        />
                    </div>

                    <textarea name="" id="" cols="30" rows="10"
                    value={this.state.formdata.review}
                    onChange={(event)=>this.handleInput(event,'review')}

                    ></textarea>

                    <div className="form_element">
                        <input type="text"
                        placeholder='Enter Pages'
                        value={this.state.formdata.pages}
                        onChange={(event)=>this.handleInput(event,'pages')}
                        />
                    </div>

                    <div className="form_element">
                       <select value={this.state.rating} 
                       onChange={(event)=>this.handleInput(event,'rating')} id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        
                       </select>
                    </div>

                    <div className="form_element">
                        <input type="number"
                        placeholder='Enter Price'
                        value={this.state.formdata.price}
                        onChange={(event)=>this.handleInput(event,'price')}
                        />

                    </div>
                    <button type='submit'>Add Review</button>
                    {

                        this.props.books.newbook ? 
                        this.showNewBook(this.props.books.newbook) 
                        :null                       
                    }
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return {
        books:state.books
    }
}

export default connect(mapStateToProps)(AddBook)

