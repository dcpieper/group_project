import CommunityList from "../components /CommunityList";
import CommunityForm from "../components /CommunityForm";
const CommunityContainer = () => {
  return (
    <div className="community-container">
      <CommunityForm />
      <CommunityList />
    </div>
  );
};

export default CommunityContainer;
