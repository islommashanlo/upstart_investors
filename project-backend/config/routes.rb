Rails.application.routes.draw do
  resources :investor_companies
  resources :user_companies
  resources :company_industries
  resources :relationships
  resources :comments
  resources :posts
  resources :industries
  resources :companies
  resources :users
  post '/login', to: 'auth#create'
  get '/profile', to: 'users#profile'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
