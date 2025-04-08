import React, { useEffect } from "react";
import BlogSkeleton from "./BlogSkeleton";
import ErrorMessage from "../../ErrorMessage";
import BlogCard from "./BlogCard";
import { useGetBlogAdd } from "../../../hook/useGetBlogAdd";
import { useSearchParams } from "react-router-dom";
import BlogPagination from "./BlogPagination"; // ✅ Import the pagination component

export default function BlogAdd() {
  const { data: blogs, isError, isLoading, error } = useGetBlogAdd();

  const itemsPerPage = 3;
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const count = blogs?.length || 0;
  const totalPages = count ? Math.ceil(count / itemsPerPage) : 1;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setSearchParams({ page: currentPage + 1 });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setSearchParams({ page: currentPage - 1 });
    }
  };

  const handlePageChange = (page) => {
    setSearchParams({ page });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = blogs?.slice(startIndex, endIndex) || [];

  if (isLoading) return <BlogSkeleton />;
  if (isError) return <ErrorMessage errorMessage={error.message} />;

  return (
    <div className="w-full">
      <h1 className=" md:text-[64px] text-[44px] text-center font-bold text-[#000] font-poppins mb-[3rem] mt-[1rem]">
        Suggested For You
      </h1>
      <div className="grid grid-cols-1 gap-[8rem] justify-items-center w-full">
        {currentItems.map((item) => (
          <BlogCard data={item} key={item.id} />
        ))}
      </div>

      {/* ✅ Add Pagination Component Below */}
      <BlogPagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}
