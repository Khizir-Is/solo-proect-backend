import React from "react";

function Preloader() {
  return <div className="text-center position-absolute top-50 start-50">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Загрузка...</span>
    </div>
  </div>;
}

export default Preloader;
