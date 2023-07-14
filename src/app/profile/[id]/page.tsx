import React from "react";

type ParamType = {
  id: string | number;
};

const UserProfile = ({ params }: { params: ParamType }) => {
  return (
    <div>
      <h1 className="text-3xl">User Profile Page {params.id}</h1>
    </div>
  );
};

export default UserProfile;
