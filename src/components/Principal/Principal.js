import React, { Component } from "react";
import Header from "./../Header/Header";
import DashboardWrapper from "./../../DashboardWrapper/DashboardWrapper";
import Modal from "./UI/Modal";
import config from "../../services/config";
import Userimg from "./../../assets/img/user.svg";

const API_ID = "6de6abfedb24f889e0b5f675edc50deb";

class Principal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUsers: [],
      show: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  // Life Cycle for get fetch data
  componentDidMount() {
    this.getData();
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  getData() {
    fetch(config.defaultUrl + API_ID, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    }).then(response =>
      response.json().then(data => {
        if (response.ok) {
          this.setState({
            dataUsers: data.results
          });
        }
        console.log(this.state.dataUsers);
      })
    );
  }

  render() {
    let users = this.state.dataUsers.map((user, index) => {
      return user.map((aux, index2) => {
        return (
          <div key={index2}>
            <div className="col-md-3 well well-sm">
              <div className="row-fluid">
                <div className="span2">
                  <img
                    // src="https://via.placeholder.com/350x150"
                    src={Userimg}
                    className="img-circle center-block"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <span className="text-center">
                    <h4>
                      {aux.first} {aux.last}
                    </h4>
                  </span>
                </div>
                <div className="span8 text-center">
                  <p>Email: {aux.email}</p>
                  <p>Ubication: {aux.address}</p>
                  <p>
                    created:
                    {aux.created}
                  </p>

                  <a
                    className="btn btn-default btn-sm"
                    data-target={"#myModal"}
                    data-toggle={"modal"}
                    onClick={this.handleShow}
                  >
                    ver informacion
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      });
    });

    // let userForId = this.state.dataUsers.map((u, index) => {
    //   return (
    //     <div key={index}>
    //       <p>
    //         {u[index].first}
    //         {u[index].last}
    //       </p>
    //     </div>
    //   );
    // });

    return (
      <div>
        <Header />
        <DashboardWrapper>
          <div className="row">{users}</div>
          <Modal
            title={"Modal Information"}
            show={this.state.show}
            handleClose={this.handleClose.bind(this)}
            close={this.handleClose.bind(this)}
          >
            <div>Hola mundo {}</div>
          </Modal>
        </DashboardWrapper>
      </div>
    );
  }
}
export default Principal;
