class CreateInvestorCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :investor_companies do |t|
      t.integer :user_id
      t.integer :company_id
      t.float :amount_pledged, default: 0
      t.timestamps
    end
  end
end
