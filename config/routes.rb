Rails.application.routes.draw do
  # root 'homepage#index'
  # namespace :api, defaults: {format: :json} do
  #   get 'students/index'
  #   get '/show/:id', to: 'students#show' 
  #   resources :students, only: [:index]
  #   get 'users/index'
  #   get 'users/show'
  #   post 'users/create'
  # end
  
  namespace :api do
    namespace :v1 do
      get 'appointments/index'
      post 'appointments/create'
      get 'appointments/show/:id', to: 'appointments#show'
      delete 'appointments/destroy/:id', to: 'appointments#destroy'
      patch 'appointments/edit/:id',  to: 'appointments#update'
      get 'coaches/index'
      get 'coaches/show/:id', to: 'coaches#show'
      get 'students/index'
      get 'students/show/:id', to: 'students#show'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
