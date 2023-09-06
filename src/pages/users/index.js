import React, { useState } from "react";
import useFetch from "@/hooks/useFetch";
import Image from "next/image";
import Modals from "@/components/Modals";

const UserList = () => {
  const [page, setPage] = useState(1);

  // Fetch user data using the custom hook
  const { data, loading, error } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/users?page=${page}`);

  // Page Change Function
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col w-full py-28 px-4 md:px-16 md:py-32 bg-gradient-to-tr from-pink-800 via-pink-900 to-rose-600 text-white">
        <h2 className="text-3xl font-bold mb-4">User List</h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 mb-16 gap-5">
          {[1, 2, 3, 4, 5, 6].map((key) => (
            <li
              className="flex bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] hover:scale-105 transition-all ease-in-out duration-300"
              key={key}
            >
              <div className="w-[126px] h-[100px] rounded-s-lg bg-gray-300 animate-pulse"></div>
              <div className="flex flex-col w-[90%] justify-center px-3">
                <div className="w-2/3 h-6 bg-gray-300 animate-pulse mb-2"></div>
                <div className="w-1/2 h-4 bg-gray-300 animate-pulse"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const { total_pages: totalPages, data: users } = data;

  // Check if the user is logged in
  const isLoggedIn = !!localStorage.getItem("userToken");

  return (
    <div className="min-h-screen flex flex-col w-full py-28 px-4 md:px-16 md:py-32 bg-gradient-to-tr from-pink-800 via-pink-900 to-rose-600 text-white">
      <h2 className="text-3xl font-bold mb-4">User List</h2>
      {isLoggedIn && <Modals />}
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 mb-16 gap-5">
        {users && users.length > 0 ? (
          users.map((user) => (
            <li
              className="flex bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] hover:scale-105 transition-all ease-in-out duration-300"
              key={user.id}
            >
              <Image className="rounded-s-lg object-cover" src={user.avatar} alt={`${user.first_name} ${user.last_name}`} width={100} height={100} />
              <div className="flex flex-col w-[90%] justify-center px-3">
                <h3 className="text-lg font-bold">{`${user.first_name} ${user.last_name}`}</h3>
                <a href={`mailto:${user.email}`} className="text-gray-300">
                  {user.email}
                </a>
              </div>
            </li>
          ))
        ) : (
          <li>No users found</li>
        )}
      </ul>
      <div className="pagination flex gap-5 items-center">
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          <svg className={`bg-white rounded-md fill-slate-500 ${page === 1 ? "opacity-60 cursor-not-allowed" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M8 12L14 6V18L8 12Z"></path>
          </svg>
        </button>
        <span>{`${page} of ${totalPages}`}</span>
        <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
          <svg className={`bg-white rounded-md fill-slate-500 ${page === totalPages ? "opacity-60 cursor-not-allowed" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M16 12L10 18V6L16 12Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UserList;
