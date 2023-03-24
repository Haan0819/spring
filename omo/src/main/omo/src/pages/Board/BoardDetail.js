import NewNavBoard from "../../components/NewNavBoard";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

export default function BoardDetail() {
  return (
    <div
      style={{ margin: "auto", width: "60%", height: "100%" }}
      id="boardDetailDiv"
    >
      <NewNavBoard />
      <div className="">
        <div>.</div>
        <div className="mt-20">
          <div>
            <p className="font-bold">
              {" "}
              [공지사항] 개인정보 처리방침 변경안내처리방침{" "}
            </p>
            <div className="flex items-end mt-2">
              <p className="">강호동</p>
              <p className="ml-3 text-sm text-gray-500">2023.01.01</p>
            </div>
            <hr className="mt-2" />
          </div>
          <div>
            <textarea
              readOnly
              className="mt-3 text-sm bg-white resize-none"
              style={{
                width: "100%",
                height: "50vh",
              }}
            >
              공지사항은 없습니다.
            </textarea>
          </div>
          <div className="flex justify-end mt-3 ">
            <button className="w-16 h-8 mr-5 text-sm font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600">
              수정
            </button>
            <button className="w-16 h-8 text-sm font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600">
              삭제
            </button>
          </div>
        </div>
        <hr className="mt-3 border-2 border-gray-400 opacity-100" />
        <div>
          <div className="flex mt-3">
            <p className="text-sm col-2">은지원</p>
            <p className="text-sm col-8">
              고도가 높을수록 해가 가까이 있기 때문에 덥다.
            </p>

            <p className="text-sm col-1">2022.01.01</p>
            <button className="col-1">
              <AiOutlineDelete className="" />
            </button>
          </div>

          <div className="flex mt-3">
            <p className="text-sm col-2">이름이길어도</p>
            <p className="text-sm col-8">col을 이용하면 비율이 동일할까요</p>

            <p className="text-sm col-1">2022.01.01</p>
            <button className="flex items-center justify-center w-4 h-5 text-white bg-gray-300 col-1">
              <AiOutlineDelete />
            </button>
          </div>
        </div>
        <div className="pb-20 mt-4">
          <textarea
            className="p-3 text-sm bg-white border-2 border-gray-300 rounded-lg resize-none"
            style={{ width: "100%", height: "10vw" }}
            placeholder="댓글을 입력하세요."
          ></textarea>
          <div className="flex justify-end mt-2 font-bold ">
            <button className="w-16 h-8 text-sm text-white bg-green-600 rounded-lg hover:bg-green-700">
              등록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
