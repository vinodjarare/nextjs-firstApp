import React from "react";

const page = ({ params }) => {
  const { id } = params;
  console.log(id);
  return <div>page id</div>;
};

export default page;
