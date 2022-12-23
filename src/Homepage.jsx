import { useEffect, useState } from "react";
import "./style.css";
export default function Homepage() {
  const [image, setImage] = useState([]);
  const [author, setAuthor] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url =
      "https://newsapi.org/v2/everything?q=Apple&from=2022-11-17&sortBy=popularity&apiKey=cd60f3835ecc49b29d5a1c53c4d52b30";
    const getData = async () => {
      const res = await fetch(url);
      const result = await res.json();
      const data = result.articles;
      console.log(data);
      setPosts(data);
    };
    getData();
  }, []);

  const ShowData = () => {
    return (
      <>
        {posts.map((post) => {
          return (
            <div id="container">
              <div>
                <img
                  src={post.urlToImage}
                  alt="pix"
                  style={{ height: "200px", width: "200px" }}
                />
              </div>
              <h1>{post.title}</h1>
              <h5>by {post.author}</h5>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        <ShowData />
      </div>
    </div>
  );
}
