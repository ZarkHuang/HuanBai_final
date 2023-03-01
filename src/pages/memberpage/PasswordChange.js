import React, { Component } from "react";
import axios from "axios";
class MemberChangePassword extends Component {
  state = {
    memberdata: {
      account: "假資料帳號",
      password: "fakepassw",
      firstpassword: "",
      secondpassword: "",
    },
  };
  render() {
    return (
      <React.Fragment>
        <div className="row mt-5">
          <div className="col-12 text-center"><h1>改變密碼</h1></div>
        </div>

        <div className="my-auto">
          <form className="m-auto">
            <div className="row mb-4 mb-sm-4 ">
              <div className="col-sm-12">
                <label>原始密碼</label>
                <input type="text" readOnly className=" form-control-plaintext" value={this.state.memberdata.password}/>
              </div>
            </div>

            <div className="row mb-4 mb-sm-4">
              <div className="col-sm-12">
                <label>新密碼</label>
                <input type="text" className="form-control" name="firstpassword" onChange={this.firstpasswordChange}/>
              </div>
            </div>

            <div className="row mb-4 mb-sm-4">
              <div className="col-sm-12">
                <label>確認新密碼</label>
                <input type="text" className="form-control" name="secondpassword" onChange={this.secondpasswordChange} />
              </div>
            </div>

            <div className="row ">
              <div className="col-sm-12 col-md-3 col-12">
                <button className="btn btn-warning" type="button"  onClick={this.okclick}>
                  送出
                </button>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
  paswdChange = (e) => {
    let newState = { ...this.state };
    newState.memberdata.password = e.target.value;
    this.setState(newState);
  };

  firstpasswordChange = (e) => {
    let newState = { ...this.state };
    newState.memberdata.firstpassword = e.target.value;
    this.setState(newState);
  };
  secondpasswordChange = (e) => {
    let newState = { ...this.state };
    newState.memberdata.secondpassword = e.target.value;
    this.setState(newState);
  };

  okclick = async () => {
    //console.log(11,this.state.memberdata.firstpassword,12,this.state.memberdata.secondpassword, 13,this.state.memberdata.password)
    /* 拿的到舊的密碼 也拿的到新設置的一二次的密碼 */
    console.log(this.state.memberdata);
    if (
      this.state.memberdata.firstpassword ===
      this.state.memberdata.secondpassword
    ) {
      //console.log(41,this.state.memberdata.firstpassword,42,this.state.memberdata.secondpassword, 43,this.state.memberdata.password);

      let newState = { ...this.state };
      newState.memberdata.password = this.state.memberdata.secondpassword;
      //console.log(9,this.state.memberdata.secondpassword,99,this.state.memberdata.password)
      this.setState(newState);

      //console.log(100,this.state.memberdata.password)

      await axios.put(
        "http://localhost:3344/member/changepassword",
        this.state.memberdata,
        { withCredentials: true }
      );
      window.location = "/";
    } else {
      alert("密碼設置不同 請重新設置");
    }
  };
  componentDidMount = async () => {
    var serverData = await axios.get(
      "http://localhost:3344/member/changepassword",
      { withCredentials: true }
    );
    var newState = { ...this.state };
    newState.memberdata = serverData.data;
    this.setState(newState);
  };
}

export default MemberChangePassword;
