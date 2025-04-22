import React from "react";
import { useRouteError } from "react-router-dom";

function NotFound() {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="flex justify-center flex-col md:flex-row ">
      <div className="bg-blue-600 p-2 md:w-1/2">
        <h1 className="text-6xl text-wrap text-center text-white bg-blue-600 p-2">Opps!!</h1>
      </div>
      <div className="bg-amber-50 text-center md:text-start p-2 md:w-1/2">
            <h1 className="text-2xl text-red-500 font-bold ">Status: {err.status}</h1>
            <p className="text-lg text-red-500 font-semibold">Status Text: {err.statusText}</p>
            <p className="text-lg text-red-500">{err.data}</p>
      </div>
    </div>
  );
}

export default NotFound;
