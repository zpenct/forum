export interface IThread {
  id: string;
  title: string;
  body: string;
  category: string;
  createdAt: string;
  ownerId: string;
  upVotesBy: string[];
  downVotesBy: string[];
  totalComments: number;
}

export type LoginParams = {
  email: string;
  password: string;
};

export type RegisterParams = LoginParams & {
  name: string;
};

export interface IComment {
  id: string;
  content: string;
  createdAt: string;
  owner: {
    id: string;
    name: string;
    avatar: string;
  };
  upVotesBy: string[]; 
  downVotesBy: string[];
}

export interface IThreadDetail {
  id: string;
  title: string;
  body: string;
  category: string;
  createdAt: string;
  owner: {
    id: string;
    name: string;
    avatar: string;
  };
  upVotesBy: string[]; 
  downVotesBy: string[];
  comments: Comment[];
}
