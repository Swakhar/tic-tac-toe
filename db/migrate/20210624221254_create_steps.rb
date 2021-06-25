class CreateSteps < ActiveRecord::Migration[6.0]
  def change
    create_table :steps do |t|
      t.references :game, foreign_key: true
      t.integer :box
      t.integer :position

      t.timestamps
    end
  end
end
