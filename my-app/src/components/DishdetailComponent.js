import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';


function renderDish({dish}) {
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
function renderComments({comments}){
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

const DishDetail = (props) =>{
    console.log("Dishdetail Component render is invokd")
    if(props.dish != null){
        return (
            <div className = "container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <renderDish dish = {props.dish}/>
                    </div> 
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <renderComments comments = {props.dish.comments}/>
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
export default DishDetail;
