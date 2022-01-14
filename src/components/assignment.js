import React from 'react'
import {Button, Card, CardActions, CardContent, Container, Grid, Typography} from '@mui/material'
import AssignmentIcon from '@mui/icons-material/Assignment';
const Assignment = () => {
    return (
        <div>
            <Container>
            <div className='card'>
                <div>
                    <AssignmentIcon fontSize='large' id="icon"/>
                    <h3 className='assignment_1'>Assignment 1</h3>
                </div>
                <div>
                    <p className='teacher_name'>Teacher Name | Date of Assignment</p>
                </div>
                <hr className='hr_line'/>
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
                            <Button>Read More</Button>
                        </CardActions>
                    </Card>
                    </div>
                    <div>
                    <Card className="submit-card">
                        <CardContent>
                            <Typography>hello</Typography>
                        </CardContent>
                    </Card>
                    </div>
            </div>
            
            </Container>
        </div>
    )
}

export default Assignment;
