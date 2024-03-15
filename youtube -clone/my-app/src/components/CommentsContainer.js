import React from 'react'

const commentsData = [
  {
    name: "Tanamay Singh",
    text: "lorem ipsum dolo sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Tanamay Singh",
    text: "lorem ipsum dolo sit amet, consectetur adip",
    replies: [
      {
        name: "Tanamay Singh",
        text: "lorem ipsum dolo sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Tanamay Singh",
        text: "lorem ipsum dolo sit amet, consectetur adip",
        replies: [
          {
            name: "Tanamay Singh",
            text: "lorem ipsum dolo sit amet, consectetur adip",
            replies: [
              {
                name: "Tanamay Singh",
                text: "lorem ipsum dolo sit amet, consectetur adip",
                replies: [
                  {
                    name: "Tanamay Singh",
                    text: "lorem ipsum dolo sit amet, consectetur adip",
                    replies: [],
                  },
                  {
                    name: "Tanamay Singh",
                    text: "lorem ipsum dolo sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Tanamay Singh",
                        text: "lorem ipsum dolo sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Tanamay Singh",
    text: "lorem ipsum dolo sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Tanamay Singh",
    text: "lorem ipsum dolo sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Tanamay Singh",
    text: "lorem ipsum dolo sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Tanamay Singh",
    text: "lorem ipsum dolo sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Tanamay Singh",
    text: "lorem ipsum dolo sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({data}) =>{
  const {name,text,replies} = data;
  return <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
    <img 
    className="w-12 h-12"
    alt="user" src="https://static.vecteezy.com/system/resources/previews/007/296/443/non_2x/user-icon-person-icon-client-symbol-profile-icon-vector.jpg"
    
    />
    <div className="px-3">
      <p className="font-bold">{name}</p>
      <p>{text}</p>
    </div>
  </div>;
}

const CommentsList = ({comments}) =>{
  // Disclimer: Dont use indexes as keys
  // Replise are a list of comment it self
  return comments.map((comment,index) => (
    <div key={index}>
    <Comment  data={comment}/>
  {/* // rendering this comment and for each comment i am displaying comment */}
    <div className="pl-5 border border-l-black ml-5">
    <CommentsList  comments={comment.replies }/>
    </div>
  </div>
  ));
};

const CommentsContainer = () => {
  return (
     <div className="m-5 p-2">
        <h1 className="text-2xl font-bold">Comments:</h1>
        <CommentsList comments ={commentsData}/>
    </div>
  );
};

export default CommentsContainer;