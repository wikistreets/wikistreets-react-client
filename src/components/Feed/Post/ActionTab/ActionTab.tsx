import Dropdown from "./Dropdown";
import ToolBar from "./ToolBar";
import Info from "./Info";

type ActionTabProps = {};

export const ActionTab: React.FC<ActionTabProps> = (props) => {
  return (
    <div
      className="flex flex-col w-full justify-center items-center bg-white gap-4 pb-4
      sticky top-60 sm:top-0 z-20"
    >
      <Dropdown />
      <ToolBar />
      <Info totalPosts={30} totalContributors={9} totalCopies={25} />
    </div>
  );
};

export default ActionTab;
