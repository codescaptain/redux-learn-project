import React, { Component } from 'react'
import {connect} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {addPost} from '../store/actions/postAction'

class AddPost extends Component {
    state = {
        post: {
            id:'a',
            title: "",
            content: ""
        }
    }
  onChangeHandle=(e)=>{
      this.setState({
          post:{
              ...this.state.post,
              [e.target.name]:e.target.value
          }
      })
  }
  handleSubmit=(e)=>{
      e.preventDefault();
      this.props.createPost(this.state.post)
      this.setState({
          post:{
              id:uuidv4(),
              title:"",
              content:""
          }
      })
      
  }

    render() {
        return (
            <div className="container" style={{ margin: "4rem auto" }}>
                <h4 className="green-text center-align">Codescaptain</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="post_title">Title</label>
                        <input
                            onChange={this.onChangeHandle}
                            value={this.state.post.title}
                            type="text"
                            name="title"
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="post_content">Content</label>
                        <textarea
                            onChange={this.onChangeHandle}
                            value={this.state.post.content}
                            name="content"
                            className="materialize-textarea" >
                        </textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn blue">
                            Submit
                    <i className="material-icons right">send</i>
                        </button>

                    </div>

                </form>


            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
 return{
    createPost:(post)=>{
        dispatch(addPost(post))
    }
 }
}
export default connect(null,mapDispatchToProps)(AddPost);