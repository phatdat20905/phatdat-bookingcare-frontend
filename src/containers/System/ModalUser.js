import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            address: "",
        }

        this.listenToEmitter();
    }

    listenToEmitter(){
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: "",
                password: "",
                firstName: "",
                lastName: "",
                address: "",
            })
        })
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnchangeInput = (event, id) => {
        let copyState = {...this.state};
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        });

    }

    checkValiedInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for(let i = 0; i < arrInput.length; i++) {
            if(!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleAddNewUser = () => {
        let isValid = this.checkValiedInput();
        if(isValid) {
            this.props.createNewUser(this.state);
        }
    }

    render() {
        return (
            <Modal 
                isOpen={this.props.isOpen} 
                toggle={() => {this.toggle()}} 
                className={"modal-user-container"}
                size="lg"
            >
                <ModalHeader toggle={() => {this.toggle()}}>
                    Create a new user
                </ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label>Email:</label>
                                <input type='text' 
                                className='form-control' 
                                placeholder='Enter your Email' 
                                value={this.state.email}
                                onChange={(event) => this.handleOnchangeInput(event, "email")}
                                />
                            </div>
                            <div className='col-md-6'>
                                <label>Password:</label>
                                <input type='password' 
                                className='form-control' 
                                placeholder='Enter your Password'  
                                value={this.state.password}
                                onChange={(event) => this.handleOnchangeInput(event, "password")}
                                />
                            </div>
                            <div className='col-md-6'>
                                <label>FIrst Name:</label>
                                <input type='text' 
                                className='form-control' 
                                placeholder='Enter your First Name' 
                                value={this.state.firstName}
                                onChange={(event) => this.handleOnchangeInput(event, "firstName")}
                                />
                            </div>
                            <div className='col-md-6'>
                                <label>Last Name:</label>
                                <input type='text' 
                                className='form-control' 
                                placeholder='Enter your Last Name'
                                value={this.state.lastName}
                                onChange={(event) => this.handleOnchangeInput(event, "lastName")}
                                />
                            </div>
                            <div className='col-12'>
                                <label>Address:</label>
                                <input type='text' 
                                className='form-control' 
                                placeholder='Enter your Address' 
                                value={this.state.address}
                                onChange={(event) => this.handleOnchangeInput(event, "address")}
                                />
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button 
                        color="primary" 
                        className='px-3' 
                        onClick={() => this.handleAddNewUser()}
                    >
                        Save
                    </Button>{' '}
                    <Button color="secondary" className='px-3' onClick={() => {this.toggle()}}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
