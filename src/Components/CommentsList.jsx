
import {CloseButton, ListGroup} from "react-bootstrap";


const CommentsList = ({comments}) => {

    return (
        <ListGroup>
            {
                comments.map(comment =>
                    <ListGroup.Item  key={comment.id}>
                        <div className="d-flex justify-content-between align-items-start text-success">
                            <p className="small">@{comment.author}</p>
                            <p className="small">{new Date(comment.id + 2*60*60*1000).toISOString().slice(0, 19).replace('T', ', ')}</p>
                            <CloseButton className="small" />
                        </div>
                        {comment.text}
                    </ListGroup.Item>
                )
            }
        </ListGroup>
    )
}

export default CommentsList;