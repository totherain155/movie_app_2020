// movies를 render할 것이다.

import React from "react";
import PropTypes from "prop-types";

/* component가 state가 필요 없을 경우엔 class component가
될 필요는 없다.  */

function Movie({ id, year, title, summary, poster }) {
    return <h4>{title}</h4>
}

Movie.propTypes = {
    // 중요한 건 얻어 올 props를 찾기 시작하는 것이다.
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired

}

export default Movie;