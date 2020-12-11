import React from "react";


class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");

        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>
        } else {
            return null;
        } /*render를 체크한 뒤 location.state가 존재한다면 title을 return 해 줄것이고
         아니면 null을 return 한다. 
        */
    }
}

export default Detail;