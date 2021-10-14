// get "/netflix_originals" do
//     NetflixOriginal.all.to_json
//   end
//   get "/netflix_originals/:id" do
//     movie = NetflixOriginal.find(params[:id])
//     movie.to_json
//   end

//   get "/netflix_original_comments" do
//     NetflixOriginalsComment.all.to_json
//   end
//   get "/netflix_original_comments/:id" do
//     movie = NetflixOriginalsComment.find(params[:id])
//     movie.to_json
//   end

//   get "/trending" do
//     Trending.all.to_json
//   end
//   get "/trending/:id" do
//     movie = Trending.find(params[:id])
//     movie.to_json
//   end

//   get "/trending_comments" do
//     TrendingComment.all.to_json
//   end

//   get "/trending_comments/:id" do
//     movie = TrendingComment.find(params[:id])
//     movie.to_json
//   end

//   get "/top_rated" do 
//     TopRated.all.to_json
//   end
//   get "/top_rated/:id" do
//     movie = TopRated.find(params[:id])
//     movie.to_json
//   end

//   get "/top_rated_comments" do
//     TopRatedComment.all.to_json
//   end

//   get "/top_rated_comments/:id" do
//     movie = TopRatedComment.find(params[:id])
//     movie.to_json
//   end

//   get "/action" do 
//     Action.all.to_json
//   end
//   get "/action/:id" do
//     movie = Action.find(params[:id])
//     movie.to_json
//   end
//   get "/action_comments" do
//     ActionComment.all.to_json
//   end

//   get "/action_comments/:id" do
//     movie = ActionComment.find(params[:id])
//     movie.to_json
//   end

//   get "/comedy" do
//     Comedy.all.to_json
//   end
//   get "/comedy/:id" do
//     movie = Comedy.find(params[:id])
//     movie.to_json
//   end
//   get "/comedy_comments" do
//     ComedyComment.all.to_json
//   end

//   get "/comedy_comments/:id" do
//     movie = ComedyComment.find(params[:id])
//     movie
//   end

//   get "/horror" do
//     Horror.all.to_json
//   end
//   get "/horror/:id" do
//     movie = Horror.find(params[:id])
//     movie.to_json
//   end

//   get "/horror_comments" do
//     HorrorComment.all.to_json
//   end

//   get "/horror_comments/:id" do
//     movie = HorrorComment.find(params[:id])
//     movie.to_json
//   end
//   get "/romance" do
//     Romance.all.to_json
//   end
//   get "/romance/:id" do
//     movie = Romance.find(params[:id])
//     movie.to_json
//   end

//   get "/romance_comments" do
//     RomanceComment.all.to_json
//   end

//   get "/romance_comments/:id" do
//     movie = RomanceComment.find(params[:id])
//     movie.to_json
//   end

//   get "/documentaries" do
//     Documentary.all.to_json
//   end
//   get "/documentaries/:id" do
//     movie = Documentary.find(params[:id])
//     movie.to_json
//   end
//   get "/documentary_comments" do
//     DocumentaryComment.all.to_json
//   end

//   get "/documentary_comments/:id" do
//     movie = DocumentaryComment.find(params[:id])
//     movie.to_json
//   end