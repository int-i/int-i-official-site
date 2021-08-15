import Question from "../models/Question";
import Answer from "../models/Answer";

// create : 작성이 끝나고 클라이언트가 등록 버튼을 눌렀을 때 데이터 전달
export const PostQuestion = async (req, res, next) => {
	const { title, contents, anonymous, createdAt } = req.body;

    if (!title || !contents) {
		console.log("400: title or contents is blank in question. (PostQuestion in questionController)");
        return res.status(400).json({ addQuestion: false, reason: "title and contents both are required" });
    }

	// 등록이 잘 됐을 때 성공 메세지 보내고 안되면 에러 메세지 보내기.
	try {
		 
		const question = await Question.create({
            author: req.user.id,
			title,
			contents,
			anonymous,
			createdAt
        });
		res.locals.post = question;
		res.locals.schema = Question;
		res.locals.schemaName = "Question";
		next();
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

// read : 게시판에서 특정 게시글을 눌렀을 때 해당 게시글 정보 보여주기.
export const GetOneQuestion = async (req, res) => {

	try {
		const question = await Question.findById({ _id: req.params.id });
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
export const PostEditPost = async (req, res, next) => {
	const { _id, title, contents, anonymous, createdAt } = req.body;
	const user = req.user

	if (!title || !contents) {
		console.log("400: title or contents is blank in question. (PostEditPost in questionController) ");
        return res.status(400).json({ updateQuestion: false, reason: "title and contents both are required" });
    }

	// 수정이 잘 됐을 때 성공 메세지 보내고 안되면 에러 메세지 보내기.
	try {

		// await 안 붙어 있어서 수정
		const checkauthor = await Question.findOne({ _id });
		
		if (checkauthor.author !== user.nickname) {
			console.log("403: This user does not have authority to edit question. (PostEditPost in questionController) ");
			return res.status(403).json({ updateQuestion: false, reason: "only author of the post has authority to edit."});
		}

		// 자동으로 생성된 아이디로 게시글을 찾고 업데이트 시켜준다.
        const rawData = await Question.findByIdAndUpdate(_id, { $set: { title: title, contents: contents, anonymous: anonymous, createdAt: createdAt }});
        res.locals.schema = Question;
		res.locals.rawData = rawData;
		res.locals.schemaName = "Question";
		next();
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

		// await 안 붙어 있어서 수정
		const checkauthor = await Question.findOne({ _id });
		res.locals.rawData = checkauthor;
		res.locals.schema = Question;
		res.locals.schemaName = "Question";
		
		if (checkauthor.author !== user.nickname) {
			console.log("403: This user does not have authority to delete question. (PostDeleteQuestion in questionController) ");
			return res.status(403).json({ deleteQuestion: false, reason: "only author of the post has authority to delete."});
		}

		await Answer.deleteMany({ question: _id });
        await Question.deleteOne({ _id });
		next();
    } catch (err) {
		console.log("400: Failed in deleting question. (PostDeleteQuestion in questionController) ", err);
        next(err);
    }
};

// 검색 기능은 추후에 구현
// export const GetSearchQuestion = async (ctx) => {
// 	try{
// 		if (ctx.query.option == 'title') {
// 			options = [{ title: new RegExp(ctx.query.content) }];
// 		}
// 		else if (ctx.query.option == 'body') {
// 			options = [{ body: new RegExp(ctx.query.content) }];
// 		}
// 		else if(ctx.query.option == 'title_body'){
// 			options = [{ title: new RegExp(ctx.query.content) }, { body: new RegExp(ctx.query.content) }];
// 		}
// 		else {
// 			return res.status(400).send({ searchQuestion: false, reason: "No searching result" });
// 		}
	   
// 		const posts = await Question.find({ $or: options })
// 			.sort({ _id: -1 })
// 			.limit(10)
// 			.skip((page - 1) * 10)
// 			.lean()
// 			.exec();

// 		const postCount = await Post.countDocuments(posts).exec();
// 		ctx.set('Last-Page', Math.ceil(postCount / 10));
// 		ctx.body = posts.map((post) => ({
// 		  ...post,
// 		  body: removeHtmlAndShorten(post.body),
// 		}));
	
// 	  } catch (e) {
// 		ctx.throw(500, e);
// 	  }
// }
