import React from "react";
import Wrapper from "./Wrapper";
import Toggle from "./Toggle";
import Recommended from "./Recommended";
import { getRecommended } from "@/lib/recommended-service";

const Sidebar = async () => {
  const recommended = await getRecommended();
  return (
    <Wrapper>
      <Toggle />
      <div>
        <Recommended data={recommended} />
      </div>
    </Wrapper>
  );
};

export default Sidebar;
