const getPost = async () => {
  const res = await fetch("http://localhost:3000/api/postjson");
  if (!res.ok) {
    throw new Error("Failed to get data");
  }
  return res.json();
};

export const getSinglePost = async (_id: number) => {
  const item = await getPost();
  const singleItem = await item.find((post: any) => post._id == _id);
  return singleItem;
};
// export const getPosts = async (title: string) => {
//   const item = await getPost();
//   const singleItem = await item.find((post: any) => post.title == title);
//   return singleItem;
// };
