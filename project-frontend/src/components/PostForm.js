import React from 'react'


export default class PostForm extends React.Component {
    state = {
        title: "",
        content: ""
    }


    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
        console.log(this.state)
    }

    submitHandler = (e) => {
        e.preventDefault()
        let options = {
            method: "POST",
            headers: {
            "content-type": "application/json",
            "accepts": "application/json"
            },
            body: JSON.stringify({
                post: {
                    title: this.state.title,
                    content: this.state.content,
                    poster_id: this.props.user.id,
                    postee_id: this.props.user.id
                }
            })
        }
        fetch(`http://localhost:3000/posts`, options)
        .then(resp => resp.json())
        .then(console.log)
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
            <label>Title</label>
            <br/>
            <input type="text" name="title" value={this.state.title} onChange={this.changeHandler}/>
            <br/>
            <label>Post Content</label>
            <br/>
            <textarea name="content" value={this.state.content} onChange={this.changeHandler}/>
            <br/>
            <input type="submit"/>
            </form>
        )
    }
}