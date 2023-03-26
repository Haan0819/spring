import NewNavBoard from "../../components/NewNavBoard";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function BoardList() {
  const { page } = useParams();
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const [posts, setPost] = useState([]);
  const [maxInt, setMaxInt] = useState(1);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(Number(page) || 1);
  const pageSize = 5;



  const onPrevButton = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const onNextButton = () => {
    if (currentPage < maxInt) {
      setCurrentPage(currentPage + 1)
    }
  }
  useEffect(() => {
    axios.get('/api/post/list').then(res => {
      const startPage = (currentPage - 1) * pageSize;
      const endPage = startPage + pageSize;
      setTotal(res.data.length)
      const post = res.data.slice(startPage, endPage);
      setPost(post);
    }).catch(error => console.log(error))


  }, [currentPage])

  useEffect(() => {
    setCurrentPage(page)
    if (total > 5) {
      if (total % 5 !== 0) {
        setMaxInt(Math.floor(total / 5 + 1))
      } else {
        setMaxInt(Math.floor(total / 5))
      }
    }
  }, [total, page]);

  return (
    <div>
      <NewNavBoard />
      <div
        style={{ margin: "auto", width: "60%" }}
        className="h-screen"
        id="boardListDiv"
      >
        <div>.</div>
        <p className="mt-20 text-2xl font-bold">게시판</p>
        <table className="board-table mt-5 ">
          <thead>
            <tr className="text-center">
              <th scope="col" className="pb-3 col-1">
                번호
              </th>
              <th scope="col" className="pb-3 col-2">
                제목
              </th>
              <th scope="col" className="pb-3 col-1">
                이름
              </th>
              <th scope="col" className="pb-3 col-1">
                등록일
              </th>
            </tr>
          </thead>
          {posts.map((post) => (
            <tbody className="border-t-2 border-black " key={post.id}>
              <tr className="border-b border-gray-300">
                <td className="pt-2 pb-2 text-sm text-center">{post.notice ? "공지" : post.id}</td>
                <th>
                  <Link to={`/board/detail/${post.id}`} className="text-sm">
                    {post.notice ? "[공지사항]" + post.title : post.title}
                  </Link>
                </th>
                <td className="pt-2 pb-2 text-sm text-center">{post.author_id}</td>
                <td className="pt-2 pb-2 text-sm text-center">{post.updatedAt ? post.updatedAt : post.createdAt}</td>
              </tr>
            </tbody>
          ))}
        </table>
        {isLoggedIn ?
          <div className="flex justify-end mt-4">
            <Link to="/board/create">
              <button className="w-12 mr-16 text-sm text-white bg-blue-500 rounded-sm h-7 hover:bg-blue-600">
                등록
              </button>
            </Link>
          </div>
          :
          <></>
        }

        <div className="flex justify-center mt-2">
          <div>
            <button onClick={onPrevButton}>이전 페이지</button>
            {[...Array(maxInt)].map((_, index) => (
              <Link to={`/board/${index + 1}`} className="w-4 text-sm text-center mx-2" key={index}>
                {index + 1}
              </Link>
            ))}
            <button onClick={onNextButton}>다음 페이지</button>
          </div>
        </div>
      </div>
    </div>
  );
}
