
import {Button, ListGroup} from "react-bootstrap";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {appDataState} from "../States/appDataState";


const CommentsList = ({taskIDX, comments}) => {

    const setAppDataState = useSetRecoilState(appDataState);
    const appData = useRecoilValue(appDataState);

    const deleteComment = (commentID) => {
        const modifiedComments = comments.filter((comment) => comment.id !== commentID);
        const modifiedTask = {...appData.tasks[taskIDX], comments: modifiedComments};
        const modifiedTasks = appData.tasks.map((task, index) => {
            return index === taskIDX ? modifiedTask : task;
        });

        setAppDataState({...appData, tasks: modifiedTasks});
    }

    return (
        <ListGroup>
            {
                comments.map(comment =>
                    <ListGroup.Item  key={comment.id}>
                        <div className="d-flex justify-content-between align-items-start text-success">
                            <p className="small">@{comment.author}</p>
                            <p className="small">{new Date(comment.id + 2*60*60*1000).toISOString().slice(0, 19).replace('T', ', ')}</p>
                            <Button onClick={() => deleteComment(comment.id)} variant="outline-secondary py-0 px-1" style={{fontSize:'12px'}}>&#10005;</Button>
                        </div>
                        {comment.text}
                    </ListGroup.Item>
                )
            }
        </ListGroup>
    )
}

export default CommentsList;