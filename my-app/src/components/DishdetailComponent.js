import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
export default class Dishdetail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    renderDish(dish) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>

        );

    }
    renderComments(comments){
        return(
            <ul className="list-unstyled">
                {comments.map(comment => {
                    return (
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>
                                -- {comment.author} ,{" "}
                                {new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "2-digit"
                                }).format(new Date(Date.parse(comment.date)))}
                            </p>
                        </li>
                    );
                })}
            </ul>

        )
    }
    
    render() {
        if(this.props.dish != null){
            return (
                <div class = "container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div> 
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            {this.renderComments(this.props.dish.comments)}

                        </div> 
                    </div>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
}
