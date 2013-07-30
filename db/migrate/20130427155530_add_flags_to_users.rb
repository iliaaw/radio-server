class AddFlagsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :can_do_anything, :boolean, :default => false
    add_column :users, :can_manage_tracks, :boolean, :default => false
    add_column :users, :can_manage_users, :boolean, :default => false
  end
end
