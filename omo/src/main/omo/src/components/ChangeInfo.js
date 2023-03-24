import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
// import axios from "axios";

export default function ChangeInfo() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 border border-gray-300 shadow-xl rounded-xl">
      <div className="flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto ">
        <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
          <h1 className="mb-8 text-2xl font-bold text-center text-primary">
            정보 수정
          </h1>

          <p
            className="w-full p-3 text-sm font-semibold bg-white"
            name="name"
            value={name}
          >
            testsample@text.com
          </p>
          <p
            className="w-full p-3 mb-4 text-sm font-semibold bg-white"
            name="name"
            value={name}
          >
            이수근
          </p>

          <input
            type="password"
            className="w-full p-3 mb-4 text-sm font-semibold bg-white input input-primary"
            name="password"
            placeholder="비밀번호"
          />
          <input
            type="password"
            className="w-full p-3 mb-4 text-sm font-semibold bg-white input input-primary"
            name="confirm_password"
            placeholder="비밀번호 확인"
          />
          <hr className="mb-4 border-dashed " />
          <div className="flex">
            <input
              type="text"
              className="w-full p-3 mb-4 text-sm font-semibold bg-white input input-primary"
              name="year"
              placeholder="생년(4자)"
            />
            <select className="w-full mb-4 ml-1 mr-1 text-sm font-semibold bg-white input input-primary">
              <option value="">월(선택)</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="6">7</option>
              <option value="6">8</option>
              <option value="6">9</option>
              <option value="6">10</option>
              <option value="6">11</option>
              <option value="6">12</option>
            </select>

            <input
              type="text"
              className="w-full p-3 mb-4 text-sm font-semibold bg-white input input-primary"
              name="day"
              placeholder="일"
            />
          </div>
          <select className="w-full mb-4 text-sm font-semibold bg-white input input-primary">
            <option value="">성별(선택)</option>
            <option value="">남자</option>
            <option value="">여자</option>
          </select>

          <button
            type="submit"
            className="w-full btn btn-primary"
            // onClick={() => {
            //   register();
            // }}
          >
            수정하기
          </button>
        </div>
      </div>
    </div>
  );
}
