export const SearchResult: React.FC = () => {
  const handleSearch = () => {};

  return (
    <>
      <div
        onClick={handleSearch}
        className="w-full h-full flex flex-col justify-start items-start 
        px-4 py-2 mb-4 text-secondary text-sm border-solid border-b"
      >
        <p>No results found...</p>
        <div>list view of posts</div>
      </div>
    </>
  );
};