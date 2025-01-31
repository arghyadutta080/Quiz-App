import { fetchQuizResponse } from "@/api/quizResponse";
import { QuizScreenNavigator } from "@/components/common";
import { getQueryClient } from "@/utils/functions";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

const Home = async () => {
  // hydration for SSR, and SEO using separate dedicated QueryClient for server side data caching
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["questions"],
    queryFn: fetchQuizResponse,
  });
  
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <QuizScreenNavigator />
    </HydrationBoundary>
  );
};

export default Home;
