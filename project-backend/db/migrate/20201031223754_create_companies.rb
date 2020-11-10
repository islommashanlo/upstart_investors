class CreateCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :companies do |t|
      t.string :name
      t.float :money_raised
      t.string :info
      
      t.timestamps
    end
  end
end
