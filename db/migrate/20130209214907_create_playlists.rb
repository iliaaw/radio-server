class CreatePlaylists < ActiveRecord::Migration
  def change
    create_table :playlists do |t|
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
