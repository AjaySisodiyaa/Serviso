import Posts from "@/components/Posts";

const getPost = async () => {
  const res = await fetch("http://localhost:3000/api/postjson");

  if (!res.ok) {
    throw new Error("Failed to get data");
  }
  return res.json();
};
export default async function Home() {
  const posts = await getPost();
  return (
    <div className="w-full h-full text-black bg-white ">
      <Posts posts={posts} />
    </div>
  );
}
