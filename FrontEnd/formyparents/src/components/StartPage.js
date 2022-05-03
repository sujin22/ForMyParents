import React from 'react';
import {Link} from 'react-router-dom';

function StartPage(history) {
  return (
    <div>
      <Link to="/process">테스트 시작</Link>
    </div>

  );
}

export default StartPage;
