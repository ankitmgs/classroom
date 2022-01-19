import React from 'react'
import {Button, Card, CardActions, CardContent, Container, Typography} from '@mui/material'
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


const Assignment = () => {
    

    
    return (
        <div>
            <Container maxWidth="false">
            <div className='card'>
                <div>
                    <AssignmentIcon fontSize='large' id="icon"/>
                    <h3 className='assignment_1'>Assignment 1</h3>
                </div>
                <div>
                    <p className='teacher_name'>Teacher Name | Date of Assignment</p>
                </div>
                <hr className='hr_line'/>

                    <Button id="assignment-work" variant='outlined'><a href='http://www.africau.edu/images/default/sample.pdf' target="_blank">Click to View Assignment</a></Button>

                    {/* <a href="../media/sample.pdf">Assignment</a> */}

                <div>
                    <Card className="details-card">
                        <CardContent>
                            <Typography variant='h5'>Details</Typography>
                            <Typography variant='subtitle'>
                                This is the details section of given assignment.
                                This is the details section of given assignment.
                                This is the details section of given assignment.
                                This is the details section of given assignment.
                                This is the details section of given assignment.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button id='read-more-btn'>Read More</Button>
                        </CardActions>
                    </Card>
                    <Card className="submit-card">
                        <CardContent>
                            <Typography variant='h5'>Your Work</Typography>
                                <div class="mb-3">
                                    <label for="formFileMultiple" class="form-label">Attach your work here!</label>
                                    <input class="form-control" type="file" id="formFileMultiple" multiple />
                                </div>
                                <Button id="submit-btn" variant='contained'>Submit</Button>
                        </CardContent>
                    </Card>

                </div>
                <hr className='hr_line' />

                <div>
                    <PeopleAltIcon className="peopleicon" fontSize="medium" />
                    <h6 className='classcomment'>Class Comment</h6>
                </div>

                <div>
                    {/* <AccountCircle className="accounticon" /> */}
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Add Class Comment" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button class="btn btn-outline-secondary" type="button" id="sent-btn">Sent</button>
                    </div>
                </div>

            </div>
            
            </Container>
        </div>
    )
}

export default Assignment;
