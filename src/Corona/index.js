import React, { PureComponent } from "react";
import Axios from "axios";
import { connect } from "react-redux";

class componentName extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date().toDateString(),
      data: [],
      Error: ""
    };
  }

  GetApi = () => {
    console.log("Pre-fetch check function");
    Axios.get("https://api.kawalcorona.com/indonesia/")
      .then(res => {
        this.setState({
          data: res.data
        });
        console.log("res data function==>", res.data, "ini ;", this.state.data);
        //this.props.corona(res.data)
        return res;
      })
      .catch(error => {
        console.log("res error function==>", error);
        this.setState({
          Error:error
        })
        return error;
      });
  };
  componentDidMount() {
    this.GetApi();
    this.props.change2();
  }
  render() {
    if (this.state.Error !== "") {
      this.props.changeIsInternet2();
      return <div>{this.props.PropsIsInternet}</div>;
    } else {
      return (
        <div
          style={{
            border: "1px solid red",
            width: "200",
            height: "100",
            backgroundColor: "red",
            justifyContent: "center",
            justifyItems: "center"
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bolder",
              color: "white"
            }}
          >
            {this.props.PropsIslogin}Corona News {this.state.date}
            {this.state.data.map((d, i) => {
              return (
                "  Positif : " +
                d.positif +
                "  Sembuh :  " +
                d.sembuh +
                "  Meninggal :  " +
                d.meninggal
              );
            })}
          </div>
        </div>
      );
    }
  }
}

const redxState = state => ({
  PropsIslogin: state.Islogin,
  PropsIsInternet:state.IsInternet
});
const change1 = () => {
  return { type: "Change_Action_Islogin", value: "" };
};
const changeIsInternet = () => {
  return { type: "Change_Action_IsInternet", value: false};
};
const reduxDispatch = dispatch => ({
  change2: () => dispatch(change1()),
  changeIsInternet2: () => dispatch(changeIsInternet())
});

export default connect(redxState,reduxDispatch)(componentName);
