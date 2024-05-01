import SearchHistory from "./Components/SearchHistory/SearchHistory";
import SearchInput from "./Components/SearchInput/SearchInput";

export default function SearchPage() {
  return (
    <div className="mx-auto w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 min-w-[300px] flex h-full flex-col items-center">
      <SearchInput />
      <SearchHistory />
    </div>
  );
}