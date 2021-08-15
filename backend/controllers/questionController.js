import Question from "../models/Question";
import Answer from "../models/Answer";

// create : 작성이 끝나고 클라이언트가 등록 버튼을 눌렀을 때 데이터 전달
export const PostQuestion = async (req, res) => {
	const user = req.user;
	const { title, contents, anonymous, createdAt } = req.body;

    if (!title || !contents) {
		console.log("400: title or contents is blank in question. (PostQuestion in questionController)");
        return res.status(400).json({ addQuestion: false, reason: "title and contents both are required" });
    }

	// 등록이 잘 됐을 때 성공 메세지 보내고 안되면 에러 메세지 보내기.
	try {
		
		await Question.create({
            author: user.nickname,
			title,
			contents,
			anonymous,
			createdAt
        });

		res.status(200).json({ addQuestion: true });
	} catch (error) {
		console.log("400: error occurred while creating Question schema. (PostQuestion in questionController) ", error);
		res.status(400).send({ error: error.message })
	}
}

// read: 모든 질문들 다 보여주기
export const GetAllQuestions = async (req, res) => {
	try {
		const questions = await Question.find({});
		res.status(200).json({ questions: questions });
	} catch (error) {
		console.log("404: Cannot get the page of showing all questions (GetAllQuestions in questionController) ", error);
		res.status(404).send({ error: error.message });
	}
}

/*
 * read : 게시판에서 특정 게시글을 눌렀을 때 해당 게시글 정보 보여주기.
 * 변경사항 : post방식으로 사용자가 게시글을 클릭했을 때 해당 게시글의 _id를 찾아서 그 게시글의 정보를 다 보여주는 식으로 구현.
 */
export const GetOneQuestion = async (req, res) => {
	const { _id } = req.body;

	try {
		const question = await Question.findById({ _id });
        return res.status(200).json({ question: question });
    } catch (err) {
		console.log("404: Cannot get page of showing specific one question (GetOneQuestion in questionController) ", err);
        next(err);
    }
};

/*
 * update : 게시글 수정 완료 후 저장 버튼을 눌렀을 때.
 * 변경사항 : 작성자 본인만 수정이 가능하도록 구현.
 */
export const PostEditPost = async (req, res) => {
	const user = req.user;
	const { _id, title, contents, anonymous, createdAt } = req.body;

	if (!title || !contents) {
		console.log("400: title or contents is blank in question. (PostEditPost in questionController) ");
        return res.status(400).json({ updateQuestion: false, reason: "title and contents both are required" });
    }

	// 수정이 잘 됐을 때 성공 메세지 보내고 안되면 에러 메세지 보내기.
	try {
		const checkauthor = Question.findOne({ _id });
		
		if (checkauthor.author !== user.nickname) {
			console.log("403: This user does not have authority to edit question. (PostEditPost in questionController) ");
			return res.status(403).json({ updateQuestion: false, reason: "only author of the post has authority to edit."});
		}

		// 자동으로 생성된 아이디로 게시글을 찾고 업데이트 시켜준다.
        await Question.findByIdAndUpdate(_id, { $set: { author: user.nickname, title: title, contents: contents, anonymous: anonymous, createdAt: createdAt }});
        res.status(200).json({ updateQuestion: true });
	} catch (error) {
		console.log("400: Failed in updating question. (PostEditPost in questionController) ", error);
		res.status(400).send({ error: error.message })
	}
};

/*
 * delete : 하나의 포스트를 삭제하는 것. 관련된 answer들도 다 삭제해야한다. 
 * 변경사항 : 작성자 본인만 삭제가 가능하도록 구현
 */
export const PostDeleteQuestion = async (req, res, next) => {
	const user = req.user;
	const { _id } = req.body;

	try {
		const checkauthor = Question.findOne({ _id });
		
		if (checkauthor.author !== user.nickname) {
			console.log("403: This user does not have authority to delete question. (PostDeleteQuestion in questionController) ");
			return res.status(403).json({ deleteQuestion: false, reason: "only author of the post has authority to delete."});
		}

		await Answer.deleteMany({ question: _id });
        await Question.deleteOne({ _id });
        return res.status(200).json({ delQuestionSuccess: true });
    } catch (err) {
		console.log("400: Failed in deleting question. (PostDeleteQuestion in questionController) ", err);
        next(err);
    }
};

export const GetSearchQuestion = async (ctx) => {
	try{
		if (ctx.query.option == 'title') {
			options = [{ title: new RegExp(ctx.query.content) }];
		}
		else if (ctx.query.option == 'body') {
			options = [{ body: new RegExp(ctx.query.content) }];
		}
		else if(ctx.query.option == 'title_body'){
			options = [{ title: new RegExp(ctx.query.content) }, { body: new RegExp(ctx.query.content) }];
		}
		else {
			const err = new Error('검색 옵션이 없습니다.');
			return res.status(400).send({ searchQuestion: false, reason: "No searching result" });
		}
	   
		const posts = await Post.find({ $or: options })
		.sort({ _id: -1 })
		.limit(10)
		.skip((page - 1) * 10)
		.lean()
		.exec();
		const postCount = await Post.countDocuments(posts).exec();
		ctx.set('Last-Page', Math.ceil(postCount / 10));
		ctx.body = posts.map((post) => ({
		  ...post,
		  body: removeHtmlAndShorten(post.body),
		}));
	
	  } catch (e) {
		ctx.throw(500, e);
	  }
}
