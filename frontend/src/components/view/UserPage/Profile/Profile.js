// 프로필 컴포넌트

import PersonalWorkingSpace from "./PersonalWorkingSpace";
import AboutAndTag from "./AboutAndTag";
import AcessRights from "./AcessRights";

const Profile = () => {
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<PersonalWorkingSpace />
			<AboutAndTag />
			<AcessRights />
		</div>
	);
};

export default Profile;
