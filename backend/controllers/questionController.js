import Question from "../models/Question";
import Answer from "../models/Answer";

// create : 작성이 끝나고 클라이언트가 등록 버튼을 눌렀을 때 데이터 전달
export const PostQuestion = async (req, res, next) => {
	const user = req.user;
	const { title, contents, anonymous, createdAt } = req.body;

    if (!title || !contents) {
        return res.status(400).json({ addQuestion: false, reason: "title and contents both are required" });
    }

	// 등록이 잘 됐을 때 성공 메세지 보내고 안되면 에러 메세지 보내기.
	try {
		
		const question = await Question.create({
            author: user.nickname,
			title,
			contents,
			anonymous,
			createdAt
        });
		res.locals.post = question;
		res.locals.schema = Question;
		// res.status(200).json({ addQuestion: true });
		next();
	} catch (error) {
		res.status(400).send({ error: error.message })
	}
}

// read: 모든 질문들 다 보여주기
export const GetAllQuestions = async (req, res) => {
	try {
		const questions = await Question.find({});
		res.status(200).json({ questions: questions });
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
}

/*
 * read : 게시판에서 특정 게시글을 눌렀을 때 해당 게시글 정보 보여주기.
 * 아직 어떤 데이터를 받아서 보여줘야할지 안정했기 때문에 나중에 다시 구현.
 */
export const GetOneQuestion = async (req, res) => {
	try {
        return res.status(200).json({ getQuestion: true });
    } catch (err) {
        next(err);
    }
};

/*
 * update : 게시글 수정 완료 후 저장 버튼을 눌렀을 때.
 * 수정하기 버튼을 눌렀을 때 기존 데이터를 어떻게 불러올지는 구현을 더 해야함. (read와 관련돼있음)
 */
export const PostEditPost = async (req, res, next) => {
	const { _id, title, contents, anonymous, createdAt } = req.body;

	if (!title || !contents) {
        return res.status(400).json({ updateQuestion: false, reason: "title and contents both are required" });
    }

	// 수정이 잘 됐을 때 성공 메세지 보내고 안되면 에러 메세지 보내기.
	try {

		// 자동으로 생성된 아이디로 게시글을 찾고 업데이트 시켜준다.
        const rawData = await Question.findByIdAndUpdate(_id, { $set: { title: title, contents: contents, anonymous: anonymous, createdAt: createdAt }});
        res.locals.schema = Question;
		res.locals.rawData = rawData;

		// res.status(200).json({ updateQuestion: true });
		next();
	} catch (error) {
		res.status(400).send({ error: error.message })
	}
};

/*
 * delete: 하나의 포스트를 삭제하는 것.
 * 관련된 answer들도 다 삭제해야한다. 
 */
export const PostDeleteQuestion = async (req, res, next) => {
	const { _id } = req.body;

	try {
		await Answer.deleteMany({ question: _id });
        await Question.deleteOne({ _id });
        return res.status(200).json({ delQuestionSuccess: true });
    } catch (err) {
        next(err);
    }
};

