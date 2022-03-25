import { Dropdown, Pagination, Button, Badge } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./PaginationElem.css";

function PaginationElem({
  numberOfPosts,
  postsOnPage,
  currentPage,
  setCurrentPage,
  setPostsOnPage,
}) {
  const { t } = useTranslation();
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(numberOfPosts / postsOnPage); i++) {
    pageNumbers.push(i);
  }

  function prevPage() {
    const page = currentPage - 1;
    if (page <= 0) {
      setCurrentPage(currentPage);
    } else setCurrentPage(page);
  }
  function nextPage() {
    const page = currentPage + 1;
    if (page > pageNumbers) {
      setCurrentPage(currentPage);
    } else setCurrentPage(page);
  }

  const handlePostsPerPage = (e) => {
    if (e.target.value === "All") {
      setPostsOnPage(numberOfPosts);
    } else {
      setPostsOnPage(e.target.value);
    }
  };

  return (
    <>
      <>
        <Dropdown>
          <Dropdown.Toggle variant="">
            {t("main-posts-onpage")}
            <Badge bg="info">
              {postsOnPage === numberOfPosts
                ? t("main-posts-all")
                : postsOnPage}
            </Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={Button} value={3} onClick={handlePostsPerPage}>
              3
            </Dropdown.Item>
            <Dropdown.Item as={Button} value={6} onClick={handlePostsPerPage}>
              6
            </Dropdown.Item>
            <Dropdown.Item as={Button} value={9} onClick={handlePostsPerPage}>
              9
            </Dropdown.Item>
            <Dropdown.Item
              as={Button}
              value={"All"}
              onClick={handlePostsPerPage}
            >
              {t("main-posts-all")}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
      <Pagination className="pagination-elem">
        <Pagination.Prev onClick={() => prevPage()} />
        {pageNumbers.map((number) => (
          <Pagination.Item onClick={() => setCurrentPage(number)}>
            {number}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => nextPage()} />
      </Pagination>
    </>
  );
}

export default PaginationElem;
