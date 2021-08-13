// 프로필 컴포넌트

import PersonalWorkingSpace from "./PersonalWorkingSpace";
import AboutAndTag from "./AboutAndTag";
import AcessRights from "./AcessRights";

const Profile = () => {
	return (
		<center>
			<div style={{ display: "flex" }}>
				<PersonalWorkingSpace />
				<AboutAndTag />
				<AcessRights />
			</div>
		</center>
	);
};

export default Profile;
