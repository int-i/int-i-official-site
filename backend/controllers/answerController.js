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
		console.log("400: contents is blank in question. (PostAnswer in answerController)");
        return res.status(400).json({ addAnswer: false, reason: "contents is required" });
    }

	// 등록이 잘 됐을 때 성공 메세지 보내고 안되면 에러 메세지 보내기.
	try {
		
		await Answer.create({
            author: req.user.id,
			contents,
			anonymous,
			question,
			createdAt
        });

		res.status(200).json({ addAnswer: true });
	} catch (error) {
		console.log("400: error occurred while creating Answer schema. (PostAnswer in answerController) ", error);
		res.status(400).send({ error: error.message })
	}
}

// read : 모든 답변들 다 보여주기
export const GetAllAnswers = async (req, res) => {

	try{
		const answers = await Answer.find({});
		res.status(200).json({ answers: answers });
	} catch (error) {
		console.log("404: Cannot get the page of showing all answers (GetAllAnswers in answerController) ", error);
		res.status(404).send({ error: error.message });
	}
	
}

/*
 * update : 답변 수정 완료 후 저장 버튼을 눌렀을 때.
 * 변경사항 : 작성자 본인만 수정이 가능하도록 구현.
 */
export const PostEditAnswer = async (req, res) => {
	const user = req.user;
	const { _id, contents, anonymous, createdAt } = req.body;

	if (!contents) {
		console.log("400: contents is blank in question. (PostEditAnswer in answerController) ");
        return res.status(400).json({ updateAnswer: false, reason: "content is required" });
    }

	// 수정이 잘 됐을 때 성공 메세지 보내고 안되면 에러 메세지 보내기.
	try {
		const checkauthor = Answer.findOne({ _id });
		
		if (checkauthor.author !== user.nickname) {
			console.log("403: This user does not have authority to edit answer. (PostEditAnswer in answerController) ");
			return res.status(403).json({ updateAnswer: false, reason: "only author of the post has authority to edit."});
		}

		// 자동으로 생성된 아이디로 게시글을 찾고 업데이트 시켜준다.
        await Answer.findByIdAndUpdate(_id, { $set: { author: user.nickname, contents: contents, anonymous: anonymous, createdAt: createdAt }});
        res.status(200).json({ updateAnswer: true });
	} catch (error) {
		console.log("400: Failed in updating answer. (PostEditPost in answerController) ", error);
		res.status(400).send({ error: error.message })
	}
};

/*
 * delete : 하나의 답변을 삭제하는 것.
 * 변경사항 : 작성자 본인만 삭제가 가능하도록 구현
 */
export const PostDeleteAnswer = async (req, res, next) => {
	const user = req.user;
	const { _id } = req.body;

	try {
		const checkauthor = Answer.findOne({ _id });
		
		if (checkauthor.author !== user.nickname) {
			console.log("403: This user does not have authority to delete answer. (PostDeleteAnswer in answerController) ");
			return res.status(403).json({ updateAnswer: false, reason: "only author of the post has authority to delete."});
		}

        await Answer.deleteOne({ _id });
        return res.status(200).json({ delAnswerSuccess: true });
    } catch (err) {
		console.log("400: Failed in deleting answer. (PostDeleteAnswer in answerController) ", err);
        next(err);
    }
};
