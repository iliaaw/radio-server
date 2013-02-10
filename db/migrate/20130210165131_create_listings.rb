class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.references :playlist
      t.references :track

      t.timestamps
    end
  end
end

