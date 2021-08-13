import Answer from "../models/Answer";

/*
 * create : 답변 작성이 끝나고 클라이언트가 등록 버튼을 눌렀을 때 데이터 전달
 * 지금은 하나의 답변에 연관된 question의 id를 req.body로 직접 받아오지만
 * 나중에 프론트랑 연결이 되면 이 부분은 살짝 수정될 수도 있음.
 */
export const PostAnswer = async (req, res) => {
	const user = req.user;
	const { question, contents, anonymous, createdAt } = req.body;

    if (!contents) {
        return res.status(400).json({ addAnswer: false, reason: "content is required" });
    }

	// 등록이 잘 됐을 때 성공 메세지 보내고 안되면 에러 메세지 보내기.
	try {
		
		await Answer.create({
            author: user.nickname,
			contents,
			anonymous,
			question,
			createdAt
        });
		console.log(question);
		res.status(200).json({ addAnswer: true });
	} catch (error) {
		res.status(400).send({ error: error.message })
	}
}

// read : 모든 답변들 다 보여주기
export const GetAllAnswers = async (req, res) => {

	try{
		const answers = await Answer.find({});
		res.status(200).json({ answers: answers });
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
	
}

/*
 * update : 답변 수정 완료 후 저장 버튼을 눌렀을 때.
 * 수정하기 버튼을 눌렀을 때 기존 데이터를 어떻게 불러올지는 구현을 더 해야함. (read와 관련돼있음)
 */
export const PostEditAnswer = async (req, res) => {
	const { _id, contents, anonymous, createdAt } = req.body;

	if (!contents) {
        return res.status(400).json({ updateAnswer: false, reason: "content is required" });
    }

	// 수정이 잘 됐을 때 성공 메세지 보내고 안되면 에러 메세지 보내기.
	try {

		// 자동으로 생성된 아이디로 게시글을 찾고 업데이트 시켜준다.
        await Answer.findByIdAndUpdate(_id, { $set: { contents: contents, anonymous: anonymous, createdAt: createdAt }});
        res.status(200).json({ updateAnswer: true });
	} catch (error) {
		res.status(400).send({ error: error.message })
	}
};


// delete: 하나의 답변를 삭제하는 것.
export const PostDeleteAnswer = async (req, res, next) => {
	const { _id } = req.body;

	try {
        await Answer.deleteOne({ _id });
        return res.status(200).json({ delAnswerSuccess: true });
    } catch (err) {
        next(err);
    }
};
