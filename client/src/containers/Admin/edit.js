import React, { PureComponent } from 'react'

import {connect} from 'react-redux'
import {Link } from 'react-router-dom'

import {getBook, updateBook, clearBook, deleteBook} from '../../actions'


export class EditBook extends PureComponent {
    state = {
        formdata:{
            _id:this.props.match.params.id,
            name:"",
            author:'',
            review:'',
            pages:'',
            rating:'',
            price:''
        }


    }

    componentWillUnmount(){
        this.props.dispatch(clearBook())
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
        this.props.dispatch(updateBook(this.state.formdata))
       
    }

    deletePost = (e) => {
       this.props.dispatch(deleteBook(this.props.match.params.id))
     
    }

    redirectUser = () => { 
      setTimeout(()=>{
          this.props.history.push('/user/user-reviews')
      },1000)
    }

    componentWillMount(){
        this.props.dispatch(getBook(this.props.match.params.id))
        
    }

    componentWillReceiveProps(nextProps){
        let book = nextProps.books.book
        
        this.setState({
            formdata:{
                _id:book._id,
                name:book.name,
                author:book.author,
                review: book.review,
                pages:book.pages,
                rating:book.rating,
                price:book.price
            }
        })
    }

    render() {
        let books = this.props.books
        return (
            <div className='rl_container article'>
                <form onSubmit={this.submitForm}>
                {
                    books.updatebook ?
                    <div className='edit_confirm'>
                        post updates, 
                        <Link to={`/books/${books.book._id}`}>
                            Click Here to see Your Books 
                        </Link>
                    </div> : null
                }
                {
                    books.postDeleted ?
                    <div className='red_tag'>
                        Post Deleted
                        {this.redirectUser()}
                    </div> : null

                }

                    <h2>Edit Review</h2>
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
                    <button type='submit'>Edit Review</button>
                    <div className='delete_post'>
                        <div className="button"
                        onClick={this.deletePost}>
                            Delete Post
                        </div>
                    </div>
                 
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
   
    return {
        books:state.books
    }
}

export default connect(mapStateToProps)(EditBook)