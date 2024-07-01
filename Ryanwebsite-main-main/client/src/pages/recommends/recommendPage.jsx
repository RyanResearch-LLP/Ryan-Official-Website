import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import ArticleCardSkeleton from "../../components/ArticleCardSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import MainLayout from "../../components/MainLayout";
import Pagination from "../../components/Pagination";
import { getAllRecommends } from "../../services/index/recommends";
import { useSearchParams } from "react-router-dom";
import RecommendList from "./container/RecommendList";
import "./RecommendsPage.css";

let isFirstRun = true;

const RecommendsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParamsValue = Object.fromEntries([...searchParams]);

  const currentPage = parseInt(searchParamsValue?.page) || 1;
  const searchKeyword = searchParamsValue?.search || "";

  const { data, isLoading, isError, isFetching, refetch } = useQuery({
    queryFn: () => getAllRecommends(searchKeyword, currentPage, 12),
    queryKey: ["recommends"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isFirstRun) {
      isFirstRun = false;
      return;
    }
    refetch();
  }, [currentPage, searchKeyword, refetch]);

  const handlePageChange = (page) => {
    setSearchParams({ page, search: searchKeyword });
  };

  return (
    <MainLayout>
      <section className="rcm-page-container">
        {isLoading || isFetching ? (
          [...Array(3)].map((item, index) => (
            <ArticleCardSkeleton
              key={index}
              className="rcm-skeleton"
            />
          ))
        ) : isError ? (
          <ErrorMessage message="Couldn't fetch the recommends data" />
        ) : data?.data?.recommends?.length === 0 ? (
          <p className="rcm-no-recommends">No Recommends Found!</p>
        ) : (
          <RecommendList
            recommends={data?.data}
            className="rcm-recommendlist"
          />
        )}
        {!isLoading && (
          <Pagination
            onPageChange={(page) => handlePageChange(page)}
            currentPage={currentPage}
            totalPageCount={data?.headers?.["x-totalpagecount"] ? JSON.parse(data.headers["x-totalpagecount"]) : 0}
          />
        )}
      </section>
    </MainLayout>
  );
};

export default RecommendsPage;
