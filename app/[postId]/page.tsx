import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  console.log(postId);
  const myPost = ["a", "b", "c", "d", "e"];
  if (myPost.includes(postId)) {
    return (
      <div className="w-[100vw] h-[100%] text-black bg-rose-50">
        My Post: {postId}
      </div>
    );
  }
}
