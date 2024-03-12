export interface IUser {
  id: string;
  name: string;
  email?: string;
  avatar: string;
}
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
  owner: IUser;
  upVotesBy: string[];
  downVotesBy: string[];
}

export interface IThreadDetail {
  id: string;
  title: string;
  body: string;
  category: string;
  createdAt: string;
  owner: IUser;
  upVotesBy: string[];
  downVotesBy: string[];
  comments: Comment[];
}

export interface IUserScore {
  user: IUser;
  score: number;
}
