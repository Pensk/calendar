Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#index'

  resources :users, only: [:create]

  resources :schedules, only: [:index, :create], defaults: {format: :json} do
    collection do
      get 'scheduled_days'
    end
  end
end
