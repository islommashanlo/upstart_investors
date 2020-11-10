class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|

      t.string :username
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.string :education
      t.string :occupation
      t.string :info
      t.boolean :investor, default: false
      t.float :investment_fund, default: 0
      t.timestamps
    end
  end
end
