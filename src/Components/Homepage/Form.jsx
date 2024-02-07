import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TextField, Button, TextareaAutosize } from '@mui/material';
import './Form.css'; // Import your CSS file for custom styling
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Form = () => {
    return (
        <>
            <div className='mainq'>
                <div className='con2q'>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '20px' , marginTop: '10px' }}>
    <ArrowUpwardIcon style={{ fontSize: 30, color: 'rgba(255, 113, 144, 1)' }} />
    <MailOutlineIcon style={{ fontSize: 40, color: 'rgba(255, 113, 144, 1)' }} />
</div>

                    <div className='con-in'>
                        <h3>Send Query</h3>
                        <small>Chat with our travel guide</small>
                        <div className='iconsq'>

                            <Container className="query-form">

                                <Col xs={12} sm={6} className="mb-3 nameemail">
                                    <div className="field">
                                        <label htmlFor="name">Name</label>
                                        <TextField id="name" fullWidth size="small" /> {/* Added size="small" */}
                                    </div>


                                    <div className="field">
                                        <label htmlFor="email">Email</label>
                                        <TextField id="email" fullWidth size="small" /> {/* Added size="small" */}
                                    </div>
                                </Col>

                                <Col xs={12} className='nameemail'>
                                    <div className="field">
                                        <label htmlFor="subject">Subject</label>
                                        <TextField id="subject" fullWidth size="small" />
                                    </div>



                                    <div className="field">
                                        <label htmlFor="phone">Phone</label>
                                        <TextField id="phone" fullWidth size="small" />
                                    </div>
                                </Col>

                                <Row className="mb-3">
                                    <Col xs={12}>
                                        <div className="field">
                                            <label htmlFor="message">Message</label>
                                            <TextareaAutosize
                                                id="message"
                                                minRows={3}
                                               
                                                className="message-textarea"
                                                fullWidth
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                               
                        </div>
                    </div>
                                 <Row>
                                    <Col xs={1} className="text-center">
                                    <div className='bc'>

                                        <Button variant="contained" style={{ backgroundColor: 'rgba(253, 46, 90, 1)',  marginBottom: '-832px', marginLeft: '140px' }} className="submit-button">
                                            Submit
                                        </Button>
                                        </div>
                                    </Col>
                                </Row>
                </div>
            </div>

        </>
    );
};

export default Form;
