import React from "react";
import Wrapper from "./Wrapper";
import Toggle from "./Toggle";
import Recommended from "./Recommended";
import { getRecommended } from "@/lib/recommended-service";
import { getFollowedUsers } from "@/lib/follow-service";
import FollowingUsers from "./FollowingUsers";

const Sidebar = async () => {
  const recommended = await getRecommended();
  const following = await getFollowedUsers();

  return (
    <Wrapper>
      <Toggle />
      <div>
        <Recommended data={recommended} />
        <FollowingUsers data={following} />
      </div>
    </Wrapper>
  );
};

export default Sidebar;
