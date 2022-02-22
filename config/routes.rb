Rails.application.routes.draw do
  root 'static#index'
  namespace :api do
    namespace :v1, defaults: {format: 'json'} do
      get 'greetings', to: 'greetings#index'
      get 'messages', to: 'messages#index'
    end
  end

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  
end
