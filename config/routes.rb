Kigendan::Application.routes.draw do

  devise_for :users, :path => 'auth'

  root :to => 'static#home'

  resources :tracks, :only => [:index, :new, :create, :update, :destroy], :constraints => { :id => /[0-9]+/ } do
    get 'page:page', :action => :index, :on => :collection
  end

  resources :playlists, :only => [:index, :new, :create, :show, :update, :destroy], :constraints => { :id => /[0-9]+/ } do
    get 'page:page', :action => :index, :on => :collection
  end

  resources :users, :only => [:index, :update] do
    get 'page:page', :action => :index, :on => :collection
  end
  
  match '/', :to => 'static#home'
  match '/live', :to => 'static#live'
  match '/before_publish', :to => 'static#before_publish'
  match '/enable_live', :to => 'static#enable_live'
  match '/disable_live', :to => 'static#disable_live'

end
