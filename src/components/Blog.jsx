import Header from './Header';
import Footer from './Footer';
import { LoaderOne } from './ui/loader';
import { useDataFetching } from '../hooks/useDataFetching';

// Simulated fetch function (replace with your actual API call)
const fetchBlogPosts = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
  ];
};

export default function Blog() {
  const { data: posts, isLoading, error } = useDataFetching(fetchBlogPosts);

  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col justify-center items-center">
        {isLoading ? (
          <LoaderOne />
        ) : error ? (
          <div>Error loading blog posts</div>
        ) : (
          <div className="w-full max-w-4xl px-4">
            {posts?.map(post => (
              <div key={post.id} className="mb-4">
                {post.title}
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
