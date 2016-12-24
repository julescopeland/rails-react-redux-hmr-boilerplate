Rails.application.routes.draw do
  get 'client/index'

  root 'client#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
