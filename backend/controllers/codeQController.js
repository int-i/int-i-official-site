import CodeRepositoryQ from "../models/CodeRepositoryQ";
import Like from "../models/Like";

// create : 문제 작성이 끝나고 클라이언트가 등록 버튼을 눌렀을 때 데이터 전달
export const PostQuestion = async (req, res, next) => {
	const user = req.user;
	const { title, contents, recommend, createdAt } = req.body;

    if (!title || !contents) {
        return res.status(400).json({ addQuestion: false, reason: "title and contents both are required" });
    }
	else if (user.role !== 1) {
		return res.status(400).json({ addQuestion: false, reason: "uploader must be the member of IntI" })
	}

	// 등록이 잘 됐을 때 성공 메세지 보내고 안되면 에러 메세지 보내기.
	try {
		
		const codeQ = await CodeRepositoryQ.create({
            author: user.nickname,
			title,
			contents,
			recommend,
			createdAt
        });
		res.locals.post = codeQ;
		res.locals.schema = CodeRepositoryQ;

		// res.status(200).json({ addQuestion: true });
		next();
	} catch (error) {
		res.status(400).send({ error: error.message })
	}
}


// read: 모든 질문들 다 보여주기
export const GetAllQuestions = async (req, res) => {
	try {
		const questions = await CodeRepositoryQ.find({});
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
export const PostEditQuestion = async (req, res) => {
	const user = req.user;
	const { _id, title, contents, createdAt } = req.body;

	if (!title || !contents) {
		console.log("400: title and contents both are required in code repository question");
        return res.status(400).json({ updateQuestion: false, reason: "title and contents both are required" });
    }

	try {
        await CodeRepositoryQ.findByIdAndUpdate( _id, { $set: { title: title, contents: contents, createdAt: createdAt }});
        res.status(200).json({ updateQuestion: true });
	} catch (error) {
		//console.log("error occured while updating a question of code repository (update): "+error);
		res.status(400).send({ error: error.message });
	}
};

/*
 * update : 추천수 올리기
 * 사용자로부터 따로 받아야하는 정보들은 없기 때문에 get방식 사용.
 * 추후에 프론트랑 연결시켜서 _id로 검색해 추천수를 올리는 방법은 다시 고려해봐야함.
 */
//사람당 한 게시글에 하나인 추천수는 이따가 다시 구현 (LikeController 따로 만들기)
export const GetRecommend = async (req, res, next) => {
	const user = req.user;

	try {

		//아직 구현 전. 질문게시판과 답변게시판 연동시키고 다시 구현
		const isLiked = await Like.findOne({$and: [{ nickname: user.nickname }, { codeqId: board }]});
		await CodeRepositoryQ.findByIdAndUpdate( _id, { $set: { recommend: question.recommend + 1 } });
        return res.status(200).json({ updateRecommendSuccess: true });
    } catch (err) {
        next(err);
    }
};


// delete: 하나의 포스트를 삭제하는 것.
export const PostDeleteQuestion = async (req, res, next) => {
	const { _id } = req.body;

	try {
        await CodeRepositoryQ.deleteOne({ _id });
        return res.status(200).json({ delQuestionSuccess: true });
    } catch (err) {
        next(err);
    }
};


