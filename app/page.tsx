import Clock from "@/components/Clock";
import SearchBar from "@/components/SearchBar";
// import Weather from "@/components/Weather";
// import Quote from "@/components/Quote";
import BookmarkGrid from "@/components/BookmarkGrid";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Clock />
          <SearchBar />
          {/* <Weather />
          <Quote /> */}
          <BookmarkGrid />
        </div>
      </div>
    </main>
  );
}