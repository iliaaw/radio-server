class AddFlagsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :admin, :boolean, :default => false
    add_column :users, :dj, :boolean, :default => false
    add_column :users, :broadcaster, :boolean, :default => false
    add_column :users, :guest, :boolean, :default => false
  end
end
