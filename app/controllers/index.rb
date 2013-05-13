get '/' do
  # @grandma = humor_response(params[:grandma])
  # @grandma ="this is working"
  # @grandma = ""
  erb :index
end

post '/grandma' do
  # redirect "/?grandma=#{params[:user_input]}"
  @grandma =  humor_response(params[:user_input])
  erb :index

end


def humor_response(input)
  # return input
  if input.nil?
    "input is nil"
  elsif input == input.upcase
    "YOU SURE TALK LOUD"
  else
    "Speak up Kiddo!!!"
  end
end

