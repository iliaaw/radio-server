class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :album
      t.string :author
      t.integer :bitrate
      t.integer :duration
      t.string :genre
      t.datetime :release_date
      t.string :title

      t.timestamps
    end
  end
end
