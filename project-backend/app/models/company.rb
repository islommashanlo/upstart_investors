class Company < ApplicationRecord
    has_many :user_companies
    has_many :investor_companies
    has_many :company_industries
    has_many :users, through: :user_companies
    has_many :industries, through: :company_industries
    has_many :investors, through: :investor_companies, source: :user
    has_one_attached :logo
end
