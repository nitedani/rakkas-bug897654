import { CommonHooks, useSSQ } from "rakkasjs";
import { Suspense } from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const r = useSSQ(() => {
    return 22;
  });

  return <>{children}</>;
};

const hooks: CommonHooks = {
  wrapApp(app) {
    return (
      <Suspense fallback="">
        <Wrapper>{app}</Wrapper>
      </Suspense>
    );
  },
};

export default hooks;
