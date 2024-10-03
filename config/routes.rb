Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create, :update]
    end
  end

  get '*path', to: 'home#index', constraints: ->(request) { !request.xhr? && request.format.html? }
end
