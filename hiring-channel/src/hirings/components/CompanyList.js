import React from "react";
import axios from "axios";
import logo from "../../assets/arkademy.png";
import swal from "sweetalert";
import jwtDecode from "jwt-decode";
import {
  Card,
  Navbar,
  Nav,
  InputGroup,
  FormControl,
  Col,
  NavDropdown,
  Dropdown,
  DropdownButton,
  Pagination
} from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpen,
  faCommentDots,
  faSignOutAlt,
  faUserCircle,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
// import Pagination from './Pagination'
class CompanyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      limits: 10,
      sortBy: "Name",
      sort: "DESC",
      page: [],
      companies: [],
      companiesName: "",
      isLoading: false,
      id: "",
      username: ""
    };
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleLimit = this.handleLimit.bind(this);
  }

  handleSort(value) {
    this.setState({
      sort: value
    });
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/companies/?sortBy=Name&sort=${value}`
      )
      .then(res => {
        this.setState({
          posts: res.data.data,
          page: res.data.pageDetail
        });
      });
  }
  handleLimit(value) {
    this.setState({
      limits: value
    });
    axios
      .get(`${process.env.REACT_APP_API_URL}/companies/?limit=${value}`)
      .then(res => {
        this.setState({
          posts: res.data.data,
          page: res.data.pageDetail
        });
      });
  }
  onSearch = e => {
    const val = e.target.value;
    console.log(e.target.value);
    this.setState({ companiesName: val, isLoading: true });
    //call API search for companies name
    axios
      .get(`${process.env.REACT_APP_API_URL}/companies/?s=${val}`)
      .then(res => {
        // console.log(e.targ?et.value);
        this.setState({ posts: res.data.data, isLoading: false });
      })
      .catch(err => {
        console.log(err);

        this.setState({ isLoading: false });
      });
  };
  componentDidMount() {
    const token = localStorage.token;
    const decoded = jwtDecode(token);
    console.log(decoded);

    this.setState({
      id: decoded.dataId,
      username: decoded.Name
    });
    axios.get(`${process.env.REACT_APP_API_URL}/companies`).then(res => {
      this.setState({
        posts: res.data.data,
        page: res.data.pageDetail
      });
    });
  }
  nextPage = () => {
    console.log(this.state.page.nextLink);

    axios.get(this.state.page.nextLink).then(res => {
      this.setState({
        posts: res.data.data,
        page: res.data.pageDetail
      });
    });
  };
  prevPage = () => {
    axios.get(this.state.page.prevLink).then(res => {
      this.setState({
        posts: res.data.data,
        page: res.data.pageDetail
      });
    });
  };
  getLogout = () => {
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        localStorage.removeItem("token");
        this.props.history.push("/");
      }
    });
  };

  render() {
    const { posts, page, companies, companiesName, isLoading } = this.state;

    return (
      <>
        <Navbar fixed="top" bg="light" expand="lg">
          <Navbar.Brand href="/companies">
            <img src={logo} alt="Arkademy" style={{ height: "50px" }} />
          </Navbar.Brand>
          <Col md="7" className="mt-3">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <FontAwesomeIcon className="mr-auto ml-4" icon={faSearch} />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
                name="companiesName"
                value={companiesName}
                onChange={this.onSearch}
              />
            </InputGroup>
          </Col>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ textSizeAdjust: "10px" }}
          >
            <Nav className="mr-auto ml-2 mr-2">
              <NavDropdown title="Home" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1" href="/engineers">
                  Engineers
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2" href="/companies">
                  Companies
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="#home">Home</Nav.Link> */}
              <Nav.Link href={`/companyprofiles/${this.state.id}`} size="lg">
                <FontAwesomeIcon className="mr-auto ml-4" icon={faUserCircle} />{" "}
                {this.state.username.split(" ")[0]}
              </Nav.Link>
              <div
                className="mt-2 ml-3"
                style={{
                  height: "30px",
                  width: "1px",
                  border: "1 px solid #2F4F4F",
                  backgroundColor: "#2F4F4F"
                }}
              />
              <Nav.Link href="#" size="lg">
                <FontAwesomeIcon
                  className="mr-auto ml-4"
                  icon={faCommentDots}
                />
              </Nav.Link>
              <Nav.Link href="#" size="lg" onClick={this.getLogout}>
                <FontAwesomeIcon className="mr-auto ml-4" icon={faSignOutAlt} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Dropdown
          style={{
            marginLeft: "10px",
            marginTop: "50px",
            width: "140px",
            display: "inline-block"
          }}
        >
          <DropdownButton id="dropdown-basic-button" title="SORT">
            <Dropdown.Item onClick={() => this.handleSort("ASC")}>
              Name A-Z
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.handleSort("DESC")}>
              Name Z-A
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>
        <Dropdown
          style={{
            marginLeft: "10px",
            marginTop: "50px",
            width: "140px",
            display: "inline-block"
          }}
        >
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            LIMIT
          </Dropdown.Toggle>
          <Dropdown.Menu
            style={{
              textSizeAdjust: "10px",
              fontFamily: `'Tajawal', sans-serif`
            }}
          >
            <Dropdown.Item onClick={() => this.handleLimit("5")}>
              5
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.handleLimit("10")}>
              10
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <br />
        <div>
          <ul>
            {isLoading && <p>Loading...</p>}
            {!isLoading && companies}
          </ul>
        </div>

        <center>
          {posts.map((post, index) => (
            <li
              key={index}
              style={{
                listStyle: "none",
                display: "inline-block",
                padding: "30px"
              }}
            >
              <Link to={`/companies/${post.id}`}>
                <Card
                  style={{
                    marginTop: "20px",
                    borderRadius: "5%",
                    backgroundImage: `url("${post.Logo}")`,
                    width: "100%",
                    height: "25rem",
                    objectFit: "cover",
                    color: "white",
                    marginBottom: "80px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center"
                  }}
                >
                  <Card.Header></Card.Header>
                  <Card.Body style={{ height: "300px" }}></Card.Body>
                  <Card.Footer
                    className="text-muted"
                    style={{ backgroundColor: "black", opacity: "0.5" }}
                  >
                    <div style={{ color: "white", textAlign: "left" }}>
                      <h5 className="card-title mb-3">{post.Name}</h5>
                      <small>{post.Description}</small>
                      <p>
                        <small>
                          <FontAwesomeIcon
                            className="mr-auto"
                            icon={faEnvelopeOpen}
                          />
                          {post.email}
                        </small>
                      </p>
                      <p className="card-text" style={{ color: "white" }}>
                        Location : <br /> {post.Location}
                      </p>
                    </div>
                  </Card.Footer>
                </Card>
              </Link>
            </li>
          ))}
        </center>
        <Nav
          className="justify-content-center"
          style={{
            marginBottom: "50px",
            position: "relative",
            alignItems: "center",
            zIndex: "-1"
          }}
        >
          <Pagination>
            <Pagination.Item onClick={this.prevPage}> Prev </Pagination.Item>
            <Pagination.Item active>{page.page}</Pagination.Item>
            <Pagination.Item onClick={this.nextPage}> Next</Pagination.Item>
          </Pagination>
        </Nav>
      </>
    );
  }
}
export default withRouter(CompanyList);
