import NewNavBoard from "../../components/NewNavBoard";
import { Link } from "react-router-dom";

export default function BoardList() {
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
        <table class="board-table mt-5 ">
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
          <tbody className="border-t-2 border-black ">
            <tr className="border-b border-gray-300">
              <td className="pt-2 pb-2 text-sm text-center">3</td>
              <th>
                <Link to="/board/detail" className="text-sm">
                  [공지사항] 개인정보 처리방침 변경안내처리방침
                </Link>
              </th>
              <td className="pt-2 pb-2 text-sm text-center">강호동</td>
              <td className="pt-2 pb-2 text-sm text-center">2023.01.01</td>
            </tr>

            <tr className="border-b border-gray-300">
              <td className="pt-2 pb-2 text-sm text-center">2</td>
              <th>
                <a className="text-sm" href="#!">
                  공지사항 안내입니다. 이용해주셔서 감사합니다
                </a>
              </th>
              <td className="pt-2 pb-2 text-sm text-center">이수근</td>
              <td className="pt-2 pb-2 text-sm text-center">2023.01.02</td>
            </tr>

            <tr className="border-b border-gray-300">
              <td className="pt-2 pb-2 text-sm text-center">1</td>
              <th>
                <a className="text-sm" href="#!">
                  공지사항 안내입니다. 이용해주셔서 감사합니다
                </a>
              </th>
              <td className="pt-2 pb-2 text-sm text-center">은지원</td>
              <td className="pt-2 pb-2 text-sm text-center">2023.01.03</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end mt-4">
          <Link to="/board/create">
            <button className="w-12 mr-16 text-sm text-white bg-blue-500 rounded-sm h-7 hover:bg-blue-600">
              등록
            </button>
          </Link>
        </div>
        <div className="flex justify-center mt-2">
          <p className="w-4 text-sm text-center">1</p>
        </div>
      </div>
    </div>
  );
}
