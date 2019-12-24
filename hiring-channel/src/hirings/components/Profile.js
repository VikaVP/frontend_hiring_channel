import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Row, Container, Col, Badge, Modal, Button } from 'react-bootstrap'
import swal from 'sweetalert'
// import { Link } from 'react-router-dom'
class Profile extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.id)

    this.state = {
      items: [],
      id: '',
      Name: '',
      Skill: '',
      DOB: '',
      expected_salary: '',
      Description: '',
      Showcase: '',
      email: '',
      Location: '',
      Date_created: '',
      Date_update: '',
      Photo: null,
      show: false
    }
    this.editData = this.editData.bind(this)
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleFieldChangeFile = this.handleFieldChangeFile.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.delete = this.delete.bind(this)
  }

  // const [show, setShow] = useState(false);
  handleClose() { this.setState({ show: false }) }
  handleShow() { this.setState({ show: true }) }
  delete() {

    axios.delete(`${process.env.REACT_APP_API_URL1}/engineers/${this.props.id}`)
      .then((response) => {
        console.log(response)
        swal("Good job!", "Engineer success deleted", "success")
        this.props.history.push('/engineers')
      })
      .catch(err => console.log(err))
  }

  handleFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFieldChangeFile(event) {
    this.setState({
      [event.target.name]: event.target.files[0]
    })
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL1}/engineers/${this.props.id}`)
      .then(response => {
        this.setState({
          items: response.data,
          id: response.data[0].id,
          Name: response.data[0].Name,
          Skill: response.data[0].Skill,
          Showcase: response.data[0].Showcase,
          DOB: response.data[0].DOB.split('T')[0],
          Description: response.data[0].Description,
          email: response.data[0].email,
          expected_salary: response.data[0].expected_salary,
          Location: response.data[0].Location,
          Date_created: response.data[0].Date_created.split('T')[0]
        })
      })
  }

  editData(e) {
    e.preventDefault()
    // console.log(this.state.Photo.name)
    const formData = new FormData()
    formData.append('id', this.state.id)
    formData.append('email', this.state.email)
    formData.append('Name', this.state.Name)
    formData.append('Photo', this.state.Photo)
    formData.append('Description', this.state.Description)
    formData.append('Skill', this.state.Skill)
    formData.append('Location', this.state.Location)
    formData.append('DOB', this.state.DOB)
    formData.append('Showcase', this.state.Showcase)
    formData.append('Date_created', this.state.Date_created)
    formData.append('expected_salary', this.state.expected_salary)

    const config = {
      headers: {
        'content-type': 'multipart/form-data; boundary=' + formData._boundary
      }
    }
    console.log(this.state)

    axios.put(`${process.env.REACT_APP_API_URL1}/engineers/${this.props.id}`, formData, config)
      .then((response) => {
        console.log(response)
        swal("Good job!", "Engineer success edited", "success")
        this.props.history.push('/engineers')
      }).catch(error => {
        console.log(formData)

        console.log(error)

        this.setState({
          errors: error
        })
      })
  }

  render() {
    const { items, show } = this.state
    return (
      <>
        {items.map((item, index) =>
          <Container>
            <Row style={{ marginTop: '120px', background: 'linear-gradient(#2F4F4F, #9198e5)', boxSizing: 'border-box', boxShadow: '10px 10px 5px #aaaaaa' }}>
              <Col sm={5}> <img src={`${item.Photo}`} alt='profile' style={{ borderRadius: '20%', width: '100%', height: '25rem', objectFit: 'cover', backgroundPosition: 'center center' }} /> </Col>
              <Col sm={5} className='align-self-center' style={{ color: 'white' }}>
                <h1>{item.Name}</h1>
                <p>DOB             : {new Intl.DateTimeFormat('en-GB', {
                  month: 'long',
                  day: '2-digit',
                  year: 'numeric'
                }).format(new Date(item.DOB))}</p>
                <p>Email           : {item.email}</p>
                <p>Description     : {item.Description}</p>
                <p>Expected Salary : {item.expected_salary}</p>
                <p>Skill           : {item.Skill}</p>
                <Badge variant='primary' style={{ width: '120px' }} onClick={this.handleShow}>
                  Edit Profile
                </Badge>
                <Badge variant='danger' style={{ width: '120px' }} onClick={this.delete}>
                  Delete Profile
                </Badge>
              </Col>
            </Row>
          </Container>

        )}

        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title id='modalEdit'>
              Edit
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <form onSubmit={this.editData}>
              <p className='h4 text-center mb-4'>Complete your Profile</p>
              <input
                type='hidden'
                id='id'
                name='id'
                className='form-control'
                value={this.state.id}
                onChange={this.handleFieldChange}

              />
              <label htmlFor='Name' className='black-text'>
                Name
              </label>
              <input
                type='text'
                id='Name'
                name='Name'
                className='form-control'
                value={this.state.Name}
                onChange={this.handleFieldChange}

              />
              <br />
              <label htmlFor='email' className='black-text'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='form-control'
                value={this.state.email}
                onChange={this.handleFieldChange}
              />
              <br />
              <label htmlFor='DOB' className='black-text'>
                DOB
              </label>
              <input
                type='date'
                id='DOB'
                name='DOB'
                className='form-control'
                value={this.state.DOB}
                onChange={this.handleFieldChange}
              />
              <br />
              <label htmlFor='skill' className='black-text'>
                Skill
              </label>
              <input
                type='text'
                id='skill'
                name='Skill'
                className='form-control'
                value={this.state.Skill}
                onChange={this.handleFieldChange}
              />
              <br />
              <label htmlFor='Location' className='black-text'>
                Location
              </label>
              <input
                type='text'
                id='Location'
                name='Location'
                className='form-control'
                value={this.state.Location}
                onChange={this.handleFieldChange}
              />
              <br />
              <label htmlFor='Showcase' className='black-text'>
                Showcase
              </label>
              <input
                type='text'
                id='Showcase'
                name='Showcase'
                className='form-control'
                value={this.state.Showcase}
                onChange={this.handleFieldChange}
              />
              <br />
              <label htmlFor='Description' className='black-text'>
                Description
              </label>
              <input
                type='text'
                id='Description'
                name='Description'
                className='form-control'
                value={this.state.Description}
                onChange={this.handleFieldChange}
              />
              <br />
              <label htmlFor='expected_salary' className='black-text'>
                Expected Salary
              </label>
              <input
                type='text'
                id='expected_salary'
                name='expected_salary'
                className='form-control'
                value={this.state.expected_salary}
                onChange={this.handleFieldChange}
              />
              <br />
              <label htmlFor='Date_created' className='black-text'>
                Date created
              </label>
              <input
                type='date'
                id='Date_created'
                name='Date_created'
                className='form-control'
                value={this.state.Date_created}
                onChange={this.handleFieldChange}
              />
              <br />
              <label htmlFor='Photo' className='black-text'>
                Photo
              </label>
              <input
                type='file'
                id='Photo'
                name='Photo'
                className='form-control'
                onChange={this.handleFieldChangeFile}
              />
              <Button variant='primary' type='submit' onChange={this.editData}>
                Save Changes
              </Button>
            </form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={this.handleClose}>
              Close
            </Button>

          </Modal.Footer>
        </Modal>
      </>
    )
  }
}
export default withRouter(Profile)
