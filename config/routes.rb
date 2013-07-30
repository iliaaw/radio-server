Kigendan::Application.routes.draw do

  root :to => 'pages#home'

  devise_for :users, :path => 'auth'

  resources :tracks, :only => [:index, :new, :create, :update, :destroy], :constraints => { :id => /[0-9]+/ } do
    get 'page:page', :action => :index, :on => :collection
  end

  resources :playlists, :only => [:index, :new, :create, :show, :update, :destroy], :constraints => { :id => /[0-9]+/ } do
    get 'page:page', :action => :index, :on => :collection
  end

  resources :users, :only => [:index, :update] do
    get 'page:page', :action => :index, :on => :collection
  end

end
