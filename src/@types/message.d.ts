type Message = {
  id: number;
  srcImg: string;
  title: string;
  certif: boolean;
  send: boolean;
  content: string;
  comments: Comment2[];
};

type Comment2 = {
  content: string;
};
